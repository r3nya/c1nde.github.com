$(document).ready(function(){
  // hide .backToTop first
  $(".backToTop").hide();

  // fade in .gototop
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 110) {
        $('.backToTop').fadeIn();
      } else {
        $('.backToTop').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('.backToTop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

});