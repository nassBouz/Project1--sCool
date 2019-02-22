var signedIn = false;
var isAdmin = false;
var storedUser = ""
var userId = "";

$(document).ready(function () {

    // signin / signup lightbox, on click of "login" fades in the sign in bar.
    $('#login').on('click', function(e) {
        $('#lightbox').empty();
        $('#lightbox').html(`
            <div id="signin-wrapper">
                <a id="signin-close" href="#">X</a>
                <form>
                    <p>User Name</p>
                    <input id="user" type="text" name="username" value="" placeholder="User Name">
                    <p>Password</p>
                    <input id="password" type="password" name="password" value="" placeholder="Password">
                    <input type="submit">
                </form>
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
                    <p>Made for Project 1 of the General Assembly WDI 51 Cohort by Lou, Matt, and Nassima</p>
            </div>`)
            $('#lightbox').fadeToggle();

            $('#signin-close').on('click', function(e) {
                $('#lightbox').fadeToggle();
        });
    });

    // login function, takes user input and compares to the user DB and sets logged in to true
    $(document).on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            method: "GET",
            url: '/api/users',
            success: function(res){
                console.log(res);
                let inputName = $('#user').val();
                let inputPass = $('#password').val();

                // iterates through the user DB comparing against user input
                res.forEach(userData => {
                    if (inputName === userData.userName) {
                        if (inputPass === userData.password) {
                            // on successful match of user input and user db, compares the password, if the password is true execute this code block
                            console.log("Hooray, it matches!")
                            $('#lightbox').fadeToggle();
                            signedIn = true;
                            storedUser = inputName;
                            $('#newRatingForms').removeClass("hidden")
                            $('#lightbox').removeAttr('id');
                            
                            if (userData.role === "admin") {
                                isAdmin = true;
                            }
                        } else {
                            console.log("Password doesn't match.")
                        }
                    } 
                })

                // sends a console log that the login or password dont match
                if (signedIn == false) {
                    console.log("Login Failed, username or password not found")
                }
                // checks if they are an admin and if so, sends them to the admin page
                console.log(signedIn)
                if (isAdmin) {
                    location.href = "/admin"
                }
            },
            error: function(err){
                console.log(err);
            }
        })
    })
});