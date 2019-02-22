var signedIn = false;
var isAdmin = false;
var userId = "";

$(document).ready(function () {

    // signin / signup lightbox, on click of "login" fades in the sign in bar.
    $('#login').on('click', function(e) {
        $('#lightbox').empty();
        $('#lightbox').html(`
            <div id="signin-wrapper">
                <a id="signin-close" href="#">X</a>
                <form id="login-form">
                    <p>User Name</p>
                    <input id="user" type="text" name="username" value="" placeholder="User Name">
                    <p>Password</p>
                    <input id="password" type="password" name="password" value="" placeholder="Password">
                    <input id="loginbtn" type="submit">
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

    $(document).on('submit', function(e) {
        e.preventDefault();
    });

    $(document).on('submit', function(e) {
        console.log("Clicky")
        e.preventDefault();
        $.ajax({
            method: "GET",
            url: '/api/users',
            success: function(res){
                console.log(res);
                let inputName = $('#user').val();
                let inputPass = $('#password').val();

                res.forEach(userData => {
                    if (inputName === userData.userName) {
                        if (inputPass === userData.password) {
                            console.log("Hooray, it matches!")
                            $('#lightbox').fadeToggle();
                            signedIn = true;
                            if (userData.role === "admin") {
                                isAdmin = true;
                            }
                        } else {
                            console.log("Password doesn't match.")
                        }
                    } 
                })

                if (signedIn == false) {
                    alert("Login Failed, username or password not found")
                }
                console.log(signedIn)
                if (isAdmin) {
                    location.href = "http://localhost:3000/admin"
                }
            },
            error: function(err){
                console.log(err);
            }
        })
    })
});