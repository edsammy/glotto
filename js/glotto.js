$( document ).ready(function() {
    $('#logo').click(function(e) {
        e.preventDefault();
        var email = $('#email');
        var emailText = email.html();
        email.hide().html('<span class="glotto" data-tooltip="Glotto recommends greetings!">Insert a greeting here.</span><br> <br> <span class="tooharsh" data-tooltip="Soften your tone.">'+emailText+'</span><br><br><br>--------------<br>I <a href="">Glottoed</a> this message!').fadeIn(1000);
    });
});