let url = window.location.href;
const google_maps = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"

// console.log(url)

let splitUrl = url.split("/");
let listingUrl = splitUrl[splitUrl.length - 1]
// console.log(splitUrl[splitUrl.length - 1])

$(document).ready(function () {

    $.ajax({
        method: 'GET',
        url: '/api/schools/' + listingUrl,
        success: function(res) {
            console.log(res[0].schoolName)
            let address = `${res[0].schoolAddress.streetAddress}, ${res[0].schoolAddress.city}, ${res[0].schoolAddress.state} ${res[0].schoolAddress.zipCode}`;
            $('.about').html(
                `<h2>${res[0].schoolName}</h2>
                <p>${res[0].aboutSchool}</p>`)
            $('.school-img').html(
                `<img src="../../../../images/placeholder.png">`
            )
            $('.address').html(
                `<p>${address}</p>`
            )
            document.title = res[0].schoolName
            
            // most of this code came from a stack overflow response to the problem, i worked
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
                zoom: 13,
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
});