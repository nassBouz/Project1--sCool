let listingId = "test"

$(document).ready(function() {

  /**********
   * Schools *
   **********/
  function showSchools() {
  
    $('#choolTable tbody').empty();
    $.ajax({
        method: 'GET',
        url: '/api/schools',
        success: function(response){
          console.log("success got data response for schools", response);
    
          response.forEach(row => {
            $('#schoolTable').append('<tr><td>' + row.schoolName + '</td><td>' + row.schoolAddress.city + '</td><td>' + row.district + '</td><td>'
              + row.academicRating + '</td><td>' + row.userRating +'</td><td>'+ '<button id="' + row._id + '" class="btn btn-warning edituser">More Details</button>&nbsp;'
            +'</td></tr>');
            let target = "#" + row._id
            let id = row._id
            // creating the new page based on the onclick event for button
            $(target).on('click', function(e) {
              // listingId = row._id
              // location.href = `/listing`
              $.ajax({
                method: 'GET',
                url: '/api/schools/' + $(this)[0].id,
                success: function(response) {
                  location.href = '/listing/' + id;
                },
                error: function(error) {
                  console.log("beep boop failure");
                }
              })
            
            })
          });
    
        },
        error: function(error) {
            console.log("an error occurred", error);
        }
      });
  }   
  showSchools();


  function showSchoolsNameCity(sName, sCity) {
    $('#schoolTable tbody').empty();
    $.ajax({
        method: 'GET',
        url: '/api/schools',
        success: function(response){
          console.log("success got data response for schools", response);
    
          response.forEach(row => {
            if ((((row.schoolName).toLowerCase() == sName.toLowerCase() )&&(row.schoolAddress.city == sCity))|| (row.schoolName == sName )||(row.schoolAddress.city == sCity)){
            $('#schoolTable').append('<tr><td>' + row.schoolName + '</td><td>' + row.schoolAddress.city + '</td><td>' + row.district + '</td><td>'
              + row.academicRating + '</td><td>' + row. userRating +'</td><td>'+ '<button id="' + row._id + '" class="btn btn-warning edituser">More Details</button>&nbsp;'
              //+ row.academicRating + '</td><td>' + calculateRating(row._id) +'</td><td>'+ '<button id="' + row._id + '" class="btn btn-warning edituser">More Details</button>&nbsp;'
            +'</td></tr>');
            console.log("response for schools", response);
             // creating the new page based on the onclick event for button

            let target = "#" + row._id
            let id = row._id
            $(target).on('click', function(e) {
              // listingId = row._id
              // location.href = `/listing`
              $.ajax({
                method: 'GET',
                url: '/api/schools/' + $(this)[0].id,
                success: function(response) {
                  location.href = '/listing/' + id;
                },
                error: function(error) {
                  console.log("beep boop failure");
                }
              })
            
            })
            }
            
          });
        },
        error: function(error) {
            console.log("an error occurred", error);
        }
      });
  } 

  $('#btnSearch').on('click', function(e) {
    e.preventDefault();

    $('#schoolTable tbody').empty();
    let name = $('#schoolname').val();
    let cityname =   $('#cityName').val();
        $.ajax({
            method: "GET",
            url: '/api/schools/' ,
            data: $(this).serialize(), 
            success: function(result) {
                showSchoolsNameCity(name, cityname);
                console.log(result);
            },

            error: function(error) {
                console.log(error);
            }
          });
        });

      //   $('#5c6de525a13c3723209388d3').on('click',function(e) {
      //     console.log("clicky")
      // })

    
        // function calculateRating(idSchool) {
        //   $.ajax({
        //     method: 'GET',
        //     url: '/api/Ratings',
        //     success: function(response){
        //       console.log("success got data response for ratings", response);
        //       let rat = 0;
        //       let i = 0;
        //       response.forEach(row => {
        //         if (idSchool == row.school){
        //           console.log(row.rating);
        //           // rat = rat + parseInt(row.rating);
        //           // i = i + 1;
        //         }
        //         //console.log("there is the ratingggg")
        //         let k = (rat / i);
        //         console.log(k);
        //         return (k.toString());
               
                
        //         //console.log("my rating is ", response);
        //         })
        
        //     },

        //     error: function(error) {
        //         console.log("an error occurred", error);
        //     }
        //   });
        // }
      })

