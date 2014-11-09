// ------------------------------------------
// jQuery - on page load
// ------------------------------------------
$(document).ready(function() {

  $(window).scroll(function(){
    var scrollTop = $('header').height();
    if($(window).scrollTop() >= scrollTop){
      $('#nav-container').css({
        position : 'fixed',
        top : '0'
      });
    }
    if($(window).scrollTop() < scrollTop){
      $('#nav-container').removeAttr('style');  
    }
  })

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
  // $('#nav').affix({
  //     offset: {
  //       top: $('header').height()
  //     }
  // }); 
  // console.log("inside");

  // For Portfolio Lightbox
  $(".fancybox").fancybox();

  $(".caption").fancybox({
        wrapCSS: 'fancybox-custom',
        closeClick: true,

        openEffect: 'elastic',

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
              'background' : 'rgba(0,0,0,0.85)'
            }
          },
          thumbs : {
            width  : 50,
            height : 50
          } 
        }
      });

  // jQuery Scroll Animation
  $(window).scroll(function(){
    $('.servicesIcon').each(function(){
      var iconPos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (iconPos < topOfWindow+600) {
          $(this).addClass("bounceIn");
        }
    });
  });

  //   $(window).bind('scroll',function(e){
  //     parallaxScroll();
  // });
 
  // function parallaxScroll(){
  //   var scrolled = $(window).scrollTop();

  //   $('#works').css('top',(4-(scrolled*.9))+'px');
  //   $('#portfolioContainer').css('top',(9-(scrolled*.9))+'px');
  // }

  // Animate Nav Scroll
  $("#nav ul li a[href^='#']").on('click', function(e){
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 300, function() {
      window.location.hash = hash;
    });
  });

  //Refresh Scrollspy
  // setTimeout(updateScrollSpy, 1000);

  // function updateScrollSpy() {
  //   $('[data-spy="scroll"]').each(function() {
  //     var $spy = $(this).scrollspy('refresh')
  //   });
  // }

});



$(document).ready(function() {
  $('body').addClass('js');
  var $nav = $('#nav'),
    $menulink = $('.menu-link');
  
$menulink.click(function() {
  console.log("clicked");
  $menulink.toggleClass('active');
  $nav.toggleClass('active');
  return false;
});});