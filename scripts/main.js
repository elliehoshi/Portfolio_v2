// ------------------------------------------
// jQuery - on page load
// ------------------------------------------
$(document).ready(function() {

  // For Parallax Background with Cursor Movement
  $('#landing-content').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 6);
    var amountMovedY = (e.pageY * -1 / 6);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });

  // For Parallax Box1 with Cursor Movement
  $('#landing-content').mousemove(function(e){
    var amountMovedX = (e.pageX * 1 / 4);
    var amountMovedY = (e.pageY * 1 / 4);
    $('#movement1').css('left', amountMovedX);
    $('#movement1').css('top', amountMovedY);
  });

  // For Scroll - Snap to Page
  $.fn.fullpage();
  console.log("inside");

});