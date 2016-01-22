


jQuery(function($) {
  "use strict";
/* ==============================================
   Countdown
=============================================== */
  // Create a countdown instance. Change the launchDay according to your needs.
  // The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
  // Thus the launchDay below denotes 7 May, 2014.
  var launchDay = new Date(2016, 7-1, 19);
  $('#timer').countdown({
  until: launchDay
  });


/* ==============================================
  Bx Slider
=============================================== */

  $('.bxslider').bxSlider({
      auto: true,
      pager:false,
      mode: 'fade',
      speed: 1500,
      pause:5000
      });

    /* ----------------------------------------------------------- */
   /*  Animation
   /* ----------------------------------------------------------- */
        new WOW().init();

   /* ==============================================
    Bactstretch js
=============================================== */
      $.backstretch([
          "../images/bx-slider/jam1.jpg",
          "../images/bx-slider/jam2.jpg",
          "../images/bx-slider/jam3.jpg",
          "../images/bx-slider/jam4.jpg",
          "../images/bx-slider/jam5.jpg",
          "../images/bx-slider/jam6.jpg",
          "../images/bx-slider/jam7.jpg"
        ], {
            fade: 750,
            duration: 4000
        });   



});