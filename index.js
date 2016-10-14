
$(function () {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/ira_24@ukr.net", 
            method: "POST",
            data: {
                name2: $('#name2').val()
                email: $('#email').val()
                message: $('#message').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h1>Thank you!</h1>')
        }).fail(function(xhr, err) {
            $('form').html(xhr.statusText);
        });        
    })
});

 <label for="name">Your name</label>
                <input type="text" name="Name" id="name2" placeholder="Surname and First name">
                <br><label for="email">E-mail</label>
                <input type="email" name="email" id="email">
                <br><label for="message">Message</label>
                <br><textarea name="message" rows="10" cols="30" placeholder="....." id="message"></textarea>