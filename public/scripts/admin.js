//Admin Page
$(document).ready(function() {
    //AJAX calls for:
    /**********
     * USERS *
     **********/
        function showUsers() {
    
            $('#userTable tbody').empty();
            $.ajax({
                method: 'GET',
                url: '/api/users',
                success: function(response){
                  console.log("success got data response for users", response);
            
                  response.forEach(row => {
                    $('#userTable').append('<tr><td>' + row.userName + '</td><td>' + row.role + '</td><td>' + row.avatar + '</td><td>' 
                    + '<button id="' + row._id + '" class="btn btn-warning edituser">Edit</button>&nbsp;'
                    + '<button id="' + row._id + '" class="btn btn-danger deleteuser">Delete</button></td>'
                    +'</tr>');
                  });
            
                },
                error: function(error) {
                    console.log("an error occurred", error);
                }
              });
          }   
          showUsers();
    
          $('#newUserForm').submit(function(e) {
            e.preventDefault();
        
    
            if ($('#userid').val() === '') {
                $.ajax({
                    method: "POST",
                    url: '/api/users',
                    data: $(this).serialize(), 
                    success: function(result) {
                        clearUserForm();
                        showUsers();
                        console.log(result);
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            } else {
                $.ajax({
                    method: "PUT",
                    url: '/api/users/' + $('#userid').val(),
                    data: $(this).serialize(), 
                    success: function(result) {
                        clearUserForm();
                        showUsers();
                        console.log(result);
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            }
    
          });
    
          function clearUserForm() {
            $('#userid').val('');
            $('#userName').val('');
            $('#role').val('');
            $('#avatar').val('');
          }
    
          $(document).on('click', '.deleteuser', function() {
            if(confirm('Are you sure you want to delete this user?')) {                
              $.ajax({
                  method: "DELETE",
                  url: '/api/users/' + $(this)[0].id,
                  data: $(this).serialize(),
                  success: function(result) {
                      showUsers();
                      console.log(result);
                  },
                  error: function(error) {
                      console.log(error);
                  }
              });
              console.log('Deleted', $(this)[0].id);
            }
        });
        
        $(document).on('click', '.edituser', function() {     
            $.ajax({
                method: "GET",
                url: '/api/users/' + $(this)[0].id,
                success: function(response){
          
                    $('#userid').val(response[0]._id);
                    $('#userName').val(response[0].userName);
                    $('#role').val(response[0].role);
                    $('#avatar').val(response[0].avatar);
                      
                },
                error: function(error) {
                    console.log("an error occurred", error);
                }
              });
        });// end of user ajax func
    
    /**********
     * Ratings *
     **********/
    function showRatings() {
    
        $('#ratingTable tbody').empty();
        $.ajax({
            method: "GET",
            url: '/api/ratings',
            success: function(response){
              console.log("success got data response for ratings", response);
        
              response.forEach(row => {
                $('#ratingTable').append('<tr><td>' + row.user + '</td><td>' + row.rating + '</td><td>' + row.ratingDate + '</td><td>' 
                + '<tr><td>' + row.comments + '<tr><td>' + '<tr><td>'
                + '<button id="' + row._id + '" class="btn btn-warning editrating">Edit</button>&nbsp;'
                + '<button id="' + row._id + '" class="btn btn-danger deleterating">Delete</button></td>'
                +'</tr>');
              });
        
            },
            error: function(error) {
                console.log("an error occurred", error);
            }
          });
      }   
      showRatings();
    
      $('#newRatingForm').submit(function(e) {
        e.preventDefault();
    
    
        if ($('#user_ratingid').val() === '') {
            $.ajax({
                method: "POST",
                url: '/api/ratings',
                data: $(this).serialize(), 
                success: function(result) {
                    clearRatingForm();
                    showRatings();
                    console.log(result);
                },
                error: function(error) {
                    console.log(error);
                }
            });
        } else {
            $.ajax({
                method: "PUT",
                url: '/api/ratings/' + $('#user_ratingid').val(),
                data: $(this).serialize(), 
                success: function(result) {
                    clearRatingForm();
                    showRatings();
                    console.log(result);
                },
                error: function(error) {
                    console.log(error);
                }
            });
        }
    
      });
    
      function clearRatingForm() {
        $('#user_ratingid').val('');
        $('#userRatingName').val('');
        $('#ratingDate').val('');
        $('#comments').val('');
      }
    
      $(document).on('click', '.deleterating', function() {
        if(confirm('Are you sure you want to delete this rating?')) {                
          $.ajax({
              method: "DELETE",
              url: '/api/ratings/' + $(this)[0].id,
              data: $(this).serialize(),
              success: function(result) {
                  showRatings();
                  console.log(result);
              },
              error: function(error) {
                  console.log(error);
              }
          });
          console.log('Deleted', $(this)[0].id);
        }
    });
    
    $(document).on('click', '.editrating', function() {     
        $.ajax({
            method: "GET",
            url: '/api/ratings/' + $(this)[0].id,
            success: function(response){
      
                $('#user_ratingid').val(response[0]._user_ratingid);
                $('#userRatingName').val(response[0].userRatingName);
                $('#ratingDate').val(response[0].ratingDate);
                $('#comments').val(response[0].comments);
                  
            },
            error: function(error) {
                console.log("an error occurred", error);
            }
          });
    });// end of rating ajax func
    
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
                + '<tr><td>' + row.academicRating + '<tr><td>' 
                + '<button id="' + row._id + '" class="btn btn-warning edituser">Edit</button>&nbsp;'
                + '<button id="' + row._id + '" class="btn btn-danger deleteuser">Delete</button></td>'
                +'</tr>');
              });
        
            },
            error: function(error) {
                console.log("an error occurred", error);
            }
          });
      }   
      showSchools();
    
      $('#newSchoolForm').submit(function(e) {
        e.preventDefault();
    
    
        if ($('#userid').val() === '') {
            $.ajax({
                method: "POST",
                url: '/api/users',
                data: $(this).serialize(), 
                success: function(result) {
                    clearUserForm();
                    showUsers();
                    console.log(result);
                },
                error: function(error) {
                    console.log(error);
                }
            });
        } else {
            $.ajax({
                method: "PUT",
                url: '/api/users/' + $('#userid').val(),
                data: $(this).serialize(), 
                success: function(result) {
                    clearUserForm();
                    showUsers();
                    console.log(result);
                },
                error: function(error) {
                    console.log(error);
                }
            });
        }
    
      });
    
      function clearUserForm() {
        $('#userid').val('');
        $('#userName').val('');
        $('#role').val('');
        $('#avatar').val('');
      }
    
      $(document).on('click', '.deleteuser', function() {
        if(confirm('Are you sure you want to delete this user?')) {                
          $.ajax({
              method: "DELETE",
              url: '/api/users/' + $(this)[0].id,
              data: $(this).serialize(),
              success: function(result) {
                  showUsers();
                  console.log(result);
              },
              error: function(error) {
                  console.log(error);
              }
          });
          console.log('Deleted', $(this)[0].id);
        }
    });
    
    $(document).on('click', '.edituser', function() {     
        $.ajax({
            method: "GET",
            url: '/api/users/' + $(this)[0].id,
            success: function(response){
      
                $('#userid').val(response[0]._id);
                $('#userName').val(response[0].userName);
                $('#role').val(response[0].role);
                $('#avatar').val(response[0].avatar);
                  
            },
            error: function(error) {
                console.log("an error occurred", error);
            }
          });
    });// end of school ajax func
            // function showUsers() {
    
            //     $('#schoolsTable tbody').empty();
            //     $.ajax({
            //         method: "GET",
            //         url: '/api/schools',
            //         success: function(response){
            //           console.log("success got school review data", response);
                
            //           response.forEach(row => {
            //             $('#schoolsTable').append('<tr><td>' + row.school + '</td><td>' + row.user + '</td><td>' + row.ratings+ '</td><td>' 
            //             + '<button id="' + row._id + '" class="btn btn-warning editbook">Edit</button>&nbsp;'
            //             + '<button id="' + row._id + '" class="btn btn-danger deletebook">Delete</button></td>'
            //             +'</tr>');
            //           });
                
            //         },
            //         error: function(error) {
            //             console.log("an error occurred", error);
            //         }
            //       });
     
            //   showSchools();       //   }   
    
        
        
    
        
    
        
    });//ready func
    
    
    
    
    