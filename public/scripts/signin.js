$(document).ready(function () {
    
    // signin / signup lightbox, on click of "login" fades in the sign in bar.
    $('#login').on('click', function(e) {
        $('#lightbox').empty();
        $('#lightbox').html(`
            <div id="signin-wrapper">
                <a id="signin-close" href="#">X</a>
                <form>
                    <p>User Name</p>
                    <input type="text" name="username" value="" placeholder="User Name">
                    <p>Password</p>
                    <input type="text" name="password" value="" placeholder="Password">
                </form>
            <a href="#">Sign Up</a>
        </div>`)
        $('#lightbox').fadeToggle();
        

        $('#signin-close').on('click', function(e) {
            $('#lightbox').fadeToggle();
        });
    });

    // about lightbox, brings up the "about us" section
        $('#about').on('click', function(e) {
            $('#lightbox').empty();
            $('#lightbox').html(`
                <div id="signin-wrapper">
                    <a id="signin-close" href="#">X</a>
                    <p>About us!</p>
            </div>`)
            $('#lightbox').fadeToggle();

            $('#signin-close').on('click', function(e) {
                $('#lightbox').fadeToggle();
        });
    });
    
});