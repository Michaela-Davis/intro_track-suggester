$(document).ready(function() {

  // Hide all answer cards on page load
  $(".answer-card").hide();

  // Add event to form submit
  $("form").submit(function(event) {
    // alert("got to beginning of form submit")
    var age = parseInt($("#age").val());
    console.log(age);
    var end = $('input.end:checked').val();

    if (end === "front") {
      $("#cardCSS").show();
      $("form").hide();
    } else {
      $("#cardPHP").show();
      $("form").hide();
    }

    event.preventDefault();
    // alert("got to end of form submit")
  });
});
