$(document).ready(function () {
    
    $('#login').on('click', function(e) {
        $('#signin-lightbox').empty();
        $('#signin-lightbox').html(`
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
        $('#signin-lightbox').fadeToggle();

        $('#signin-close').on('click', function(e) {
            $('#signin-lightbox').fadeToggle();
            console.log("beep")
        });
    });
});

// $(document).on('click',function(e) {
//     if (!$(e.target).closest $('#signin-wrapper').closest()) {
//         $('#signin-lightbox').fadeToggle().empty();
//         console.log("beep")
//         }
//     })
// })