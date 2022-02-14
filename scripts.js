$(document).ready(function () {
    var $form = $('#mc-embedded-subscribe-form');

    if ($form.length > 0) {
        $('form input[type="submit"]').bind('click', function (event) {
            if (event) event.preventDefault();
            if (validateInput($('#mce-EMAIL').val())) { 
                register($form); 
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});

function validateInput($email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test($email);
}

function register($form) {
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
        success     : function(data) {
            if (data.result != "success") {
                alert("Could not connect to the registration server. Please try again later.");
            } else {
                postRegisterSuccess();
            }
        }
    });
}
    
function postRegisterSuccess() {
    alert("Thanks for subscribing!");
    $("#mce-EMAIL").val("");
}