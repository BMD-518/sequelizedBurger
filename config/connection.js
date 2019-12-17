var Sequelize = require('sequelize');

const sequelize = new Sequelize('burgers_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// var connection;


// JAWSDB CONNECTION
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         port: 3306,
//         user: 'root',
//         password: 'password',
//         database: 'burgers_db'
//     });
// };


sequelize
    .authenticate()
    .then(() => {
        console.log('Successful Connection!');
    })
    .catch(err => {
        console.log('Connection failed, \nUnable to connect to the database :(')
    });




// OLD
// connection.connect(function(err) {
//     if (err) {
//         console.error("ERROR CONNECTING: " + err.stack);
//         return;
//     }
//     console.log('Connected as ID: ' + connection.threadId);
// });

module.exports = sequelize;