$(function() {
    $('.change-devoured').on('click', function(event) {
        var id = $(this).data('id');
        var newDevour = $(this).data('newdevour');

        var newDevourState = {
            devoured: newDevour
        };

        // Send PUT request
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newDevourState
        }).then(
            function() {
                console.log('changed devoured to', newDevour)
                location.reload();
            }
        );
    });

    $('.create-form').on('submit', function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $('#ca').val().trim(),
            devoured: '0'
        };

        // Send POST request
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                console.log('created new burger');
                location.reload();
            }
        );
    });

    $('.delete-burger').on('click', function(event) {
        var id = $(this).data('id');

        // Send DELETE request
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(
            function() {
                console.log('deleted burger', id);
                location.reload();
            }
        );
    });
});