// ------------------------------------------
// jQuery - on page load
// ------------------------------------------
$(document).ready(function() {
  $('#landing-content').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 6);
    var amountMovedY = (e.pageY * -1 / 6);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });

  $.fn.fullpage();
  console.log("inside");

});