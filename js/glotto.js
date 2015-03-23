$( document ).ready(function() {
    $('#logo').click(function(e) {
        e.preventDefault();
        var email = $('#email');
        var emailText = email.html();
        email.hide().html('<span class="glotto" data-tooltip="Try adding a greeting!">greeting?</span><br> <br> <span class="truncate">'+emailText+'</span>'+'&nbsp;').fadeIn(1000);
    });
});