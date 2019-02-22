let url = window.location.href;
const google_maps = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
let splitUrl = url.split("/");
let listingUrl = splitUrl[splitUrl.length - 1]
var storedUser = ""

$(document).ready(function () {

    
    $(document).on('submit', function(e) {
        storedUser = inputName;
        console.log(storedUser);
    });

    $.ajax({
        method: 'GET',
        url: '/api/schools/' + listingUrl,
        success: function(res) {
            console.log(res[0].schoolName)
            let address = `${res[0].schoolAddress.streetAddress}, ${res[0].schoolAddress.city}, ${res[0].schoolAddress.state} ${res[0].schoolAddress.zipCode}`;
            $('.about').html(
                `<h2>${res[0].schoolName}</h2>
                <p>${res[0].aboutSchool}</p>`)
            $('.school-img').prepend(
                `<img src="../../../../../images/school_images/${res[0].schoolImg}">`
            )
            $('.address').html(
                `<p>${address}</p>`
            )

            loadComments(res[0]._id);

            document.title = res[0].schoolName;

            $('.user-rating').append(`<p>${res[0].userRating}`)
            $('.academic-rating').append(`<p>${res[0].academicRating}`)

            //  need to check this one  document.title = res[0].schoolName

            
            // most of the geocode code came from a stack overflow response to the problem, i worked
            // through it and understand it but didn't create it fully from scratch
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode( { 'address': address}, function(results, status) {

                if (status == google.maps.GeocoderStatus.OK) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
            

                    initialize(latitude,longitude);
            
                    } 
        
                }); 
    
            function initialize(latitude,longitude) {
                var latlng = new google.maps.LatLng(latitude, longitude);
                    map = new google.maps.Map(document.getElementById('map'), {
                    });

                var myOptions = {
                zoom: 12,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false
                };

                var map = new google.maps.Map(document.getElementById("map"),myOptions);

                var marker = new google.maps.Marker({
                position: latlng, 
                map: map, 
                    title:`${res[0].schoolName}`
                }); 
            }
        },
        error: function(err) {
            console.log("beep boop, failure")
            throw err
        }
    })

    $('#back').on('click', function(e) {
        location.href = '../'
    })

    function userNameTractot(userId){
        $.ajax({
            method: "GET",
            url: `/api/users/ + ${userId}`,
            success: function(response){
                console.log(response);
            },
            error: function(error) {
                console.log("an error occurred here ", error);
            }
          });
        };
        // let userId = "5c6f53ca4f77011efc21a56b"
        // userNameTractot(userId);
    function loadComments(schoolId) {
        $('#commentable').empty();
         $.ajax({
             method: "GET",
             url: `/api/schools/${schoolId}/ratings`,
             success: function(response){
               //console.log("success got data", response);
               response.forEach(row => {
                // let userNName = userNameTractot(userId);
                let username = 'Guest';
                  if(row.user) {
                      username = row.user.userName;
                      console.log(username);
                  };
                   $('#commentable').append(`<tr><td>${row.comments}</td><td>${row.rating}</td><td> ${ustoredUser} </td></tr>`);
               });
             },
             error: function(error) {
                 console.log("an error occurred", error);
             }
           });
       }
     
     $('#newRatingForms').submit(function(e){
        e.preventDefault();
         console.log("trying here");
         let userId = '5c6f53ca4f77011efc21a56b';
         let data = {
            rating: $('#rating').val(),
            comments: $('#submiCommentt').val(),
            ratingDate: new Date(),
         }
        $.ajax({
            method: "POST",
            url: `/api/schools/${listingUrl}/users/${userId}/ratings/`,
            data: data, 
            success: function(result){
                 loadComments(result.school);
            },
            error: function(error) {
                console.log("an error occurred", error);
            }
          });
        })

    })