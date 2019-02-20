// wait for DOM to load before running JS
$(document).ready(function() {

    // base API route
    var baseUrl = '/api/schools';
  
    // array to hold schools data from API
    var allSchools = [];
  
    // element to display list of tschools
    var $schoolsList = $('.listing-details');
  
    // form to create new todo
    //var $createSchool = $('#create-todo');
  
    // compile handlebars template
    var source = $('#schools-template').html();
    var template = Handlebars.compile(source);
  
    // helper function to render all todos to view
    // note: we empty and re-render the collection each time our todo data changes
    function render() {
      // empty existing todos from view
      $schoolsList.empty();
  
      // pass `allTodos` into the template function
      var schoolsHtml = template({ schools: allSchools });
  
      // append html to the view
      $schoolsList.append(schoolsHtml);
    };
  
    // GET all schools on page load
    $.ajax({
      method: "GET",
      url: baseUrl,
      success: function onIndexSuccess(json) {
        console.log(json);
  
        // set `allTodos` to todo data (json.data) from API
        allschool = json.schools;
  
        // render all todos to view
        render();
      }
    });
  
    
  
  });