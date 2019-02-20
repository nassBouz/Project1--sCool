$(document).ready(function() {

    // AJAX call to get all schools
    function showSchoolReviews() {

        $('#schoolsTable tbody').empty();
        $.ajax({
            method: "GET",
            url: '/api/schools',
            success: function(response){
              console.log("success got school review data", response);
        
              response.forEach(row => {
                $('#schoolsTable').append('<tr><td>' + row.school + '</td><td>' + row.user + '</td><td>' + row.ratings+ '</td><td>' 
                + '<button id="' + row._id + '" class="btn btn-warning editbook">Edit</button>&nbsp;'
                + '<button id="' + row._id + '" class="btn btn-danger deletebook">Delete</button></td>'
                +'</tr>');
              });
        
            },
            error: function(error) {
                console.log("an error occurred", error);
            }
          });
      }
    
      showSchoolReviews();
    
      $('#newSchoolReviewsForm').submit(function(e) {
        e.preventDefault();
    
        $.ajax({
            method: "POST",
            url: '/api/schools',
            data: $(this).serialize(), 
            success: function(result) {
                showSchoolReviews();
                console.log(result);
            },
            error: function(error) {
                console.log(error);
            }
        });
      });
    
    
      $(document).on('click', '.deletebook', function() {
          if(confirm('Are you sure you want to delete this school review?')) {                
            $.ajax({
                method: "DELETE",
                url: '/api/schools/' + $(this)[0].id,
                data: $(this).serialize(),
                success: function(result) {
                    showSchoolReviews();
                    console.log(result);
                },
                error: function(error) {
                    console.log(error);
                }
            });
            console.log('Deleted', $(this)[0].id);
          }
      });
    
      $(document).on('click', '.editSchoolReview', function() {
        alert('edit');
    });// ajax func
    
});//ready func
