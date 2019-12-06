var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [{}];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        // Skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // Add quotation marks to strings that contain spaces
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = '"' + value + '"';
            }
            // push string to key value
            arr.push(key + '=' + value);
        }
    }
    // Return array as single string
    return arr.toString();
}

// SQL statement object functions

var orm = {
    // Select all from table
    all: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        }); 
    },
    // Insert values into db key
    create: function(table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Update object in db
    update: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // Delete specific data object
    delete: function(table, condition, cb) {
        var queryString = 'DELETE FROM ' + table;
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;