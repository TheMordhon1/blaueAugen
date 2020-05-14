// Preloader
$(window).on("load", function () {
  $(".load-wrapper").fadeOut("slow");
});


// get Scrolled
$(document).scroll(function () {
  $('header').toggleClass('scrolled',
    $(this).scrollTop() > $('header').height());
});