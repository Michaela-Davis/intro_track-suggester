$(document).ready(function() {

  // Hide all answer cards on page load
  $(".answer-card").hide();

  // Add event to form submit
  $("form").submit(function(event){


    event.preventDefault();
  });
});
