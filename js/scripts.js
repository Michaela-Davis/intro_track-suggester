$(document).ready(function() {

  // Hide all answer cards on page load
  $(".answer-card").hide();

  // Add event to form submit
  $("form").submit(function(event) {
    // Define variables
    var age = parseInt($("#age").val());
    var end = $('input.end:checked').val();
    var microsoft = $('input.microsoft:checked').val();
    var prefer = $('input.prefer:checked').val();

    // Define branching / logic statements
    if (end === "front") {
      $("#cardCSS").show();
      $("form").hide();
    } else if (microsoft === "love") {
      $("#cardC").show();
      $("form").hide();
    } else if (prefer === "interactive") {
      $("#cardRuby").show();
      $("form").hide();
    } else {
      $("#cardPHP").show();
      $("form").hide();
    }

    event.preventDefault();
    // alert("got to end of form submit")
  });
});
