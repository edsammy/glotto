$( document ).ready(function() {
    $('#logo').click(function(e) {
        e.preventDefault();
        var email = $('#email');
        var emailText = email.html();
        email.hide().html('<span class="glotto" data-tooltip="Glotto recommends greetings!">Insert a greeting here.</span><br> <br> <span class="tooharsh" data-tooltip="Soften your tone.">'+emailText+'</span><br><br><br>--------------<br>This email has been filtered by <a href="">Glotto</a>').fadeIn(1000);
    });
});