// ------------------------------------------
// jQuery - on page load
// ------------------------------------------
$(document).ready(function() {

  // For Parallax Background with Cursor Movement
  $('#blackBackdrop').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 6);
    var amountMovedY = (e.pageY * -1 / 6);
    $('#landing-content').css('left', amountMovedX * 4);
    $('#landing-content').css('top', amountMovedY);
    // $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });

  // For Parallax Box1 with Cursor Movement
  $('#blackBackdrop').mousemove(function(e){
    var amountMovedX = (e.pageX * 1 / 4);
    var amountMovedY = (e.pageY * 1 / 4);
    $('#movement2').css('left', amountMovedX * 2);
    $('#movement2').css('top', amountMovedY * 2);
    $('#movement3').css('left', amountMovedX);
    $('#movement3').css('top', amountMovedY);
  });

  // Sticky Nav
  $('#nav').affix({
      offset: {
        top: $('header').height()
      }
  }); 
  console.log("inside");

  // For Portfolio Lightbox
  $(".fancybox").fancybox();

  $(".caption").fancybox({
        wrapCSS: 'fancybox-custom',
        closeClick: true,

        openEffect: 'none',

        beforeLoad: function() {
          var el, id = $(this.element).data('title-id');

          if (id) {
            el = $('#' + id);

            if (el.length) {
              this.title = el.html();
            }
          }
        },
        helpers : {
          title : {
            type : 'inside'
          },
          overlay : {
            css : {
              'background' : 'rgba(238,238,238,0.85)'
            }
          }
        }
      });

});