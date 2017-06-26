$(document).ready(function() {
  $('.slider').slider();
  $('#zlank-section .content .title').animate({
    opacity: 1
  }, 500);
  $('#zlank-section .content .abstract').delay(300).animate({
    top: 0,
    opacity: 1
  }, 500);
  $('#zlank-section .content .details .l1').delay(600).animate({
    left: 0,
    opacity: 1
  }, 500);
  $('#zlank-section .content .details .l2').delay(900).animate({
    left: 0,
    opacity: 1
  }, 500);
  $('#zlank-section .content .details .l3').delay(1200).animate({
    left: 0,
    opacity: 1
  }, 500);
  $('#zlank-section .content .learn-more').delay(1500).animate({
    opacity: 1
  }, 500);
});
$(window).scroll(function() {
  if ($(window).scrollTop() > $('#upintheair-section').position().top - 0.5 * $(window).height() &&
  $(window).scrollTop() <= $('#pacprogress-section').position().top - 0.5 * $(window).height()) {
    $('#upintheair-section .content .title').animate({
      opacity: 1
    }, 500);
    $('#upintheair-section .content .abstract').delay(300).animate({
      top: 0,
      opacity: 1
    }, 500);
    $('#upintheair-section .content .details .l1').delay(600).animate({
      left: 0,
      opacity: 1
    }, 500);
    $('#upintheair-section .content .details .l2').delay(900).animate({
      left: 0,
      opacity: 1
    }, 500);
    $('#upintheair-section .content .details .l3').delay(1200).animate({
      left: 0,
      opacity: 1
    }, 500);
    $('#upintheair-section .content .details .l4').delay(1500).animate({
      left: 0,
      opacity: 1
    }, 500);
    $('#upintheair-section .content .learn-more').delay(1800).animate({
      opacity: 1
    }, 500);
  }
  if ($(window).scrollTop() > $('#pacprogress-section').position().top - 0.5 * $(window).height() &&
  $(window).scrollTop() <= $('#parking-section').position().top - 0.5 * $(window).height()) {
    $('#pacprogress-section .content .title').animate({
      opacity: 1
    }, 500);
    $('#pacprogress-section .content .abstract').delay(300).animate({
      top: 0,
      opacity: 1
    }, 500);
    $('#pacprogress-section .content .details .l1').delay(600).animate({
      left: 0,
      opacity: 1
    }, 500);
    $('#pacprogress-section .content .details .l2').delay(900).animate({
      left: 0,
      opacity: 1
    }, 500);
    $('#pacprogress-section .content .details .l3').delay(1200).animate({
      left: 0,
      opacity: 1
    }, 500);
    $('#pacprogress-section .content .learn-more').delay(1500).animate({
      opacity: 1
    }, 500);
  }
  if ($(window).scrollTop() > $('#parking-section').position().top - 0.5 * $(window).height() &&
  $(window).scrollTop() <= $('#weather-section').position().top - 0.5 * $(window).height()) {
    $('#parking-section .content .title').animate({
      opacity: 1
    }, 500);
    $('#parking-section .content .abstract').delay(300).animate({
      top: 0,
      opacity: 1
    }, 500);
    $('#parking-section .content .details .l1').delay(600).animate({
      left: 0,
      opacity: 1
    }, 500);
    $('#parking-section .content .details .l2').delay(900).animate({
      left: 0,
      opacity: 1
    }, 500);
    $('#parking-section .content .details .l3').delay(1200).animate({
      left: 0,
      opacity: 1
    }, 500);
    $('#parking-section .content .learn-more').delay(1500).animate({
      opacity: 1
    }, 500);
  }
  // if ($(window).scrollTop() > $('#weather-section').position().top - 0.5 * $(window).height()) {
  //   $('#weather-section .content .title').animate({
  //     opacity: 1
  //   }, 500);
  //   $('#weather-section .content .abstract').delay(300).animate({
  //     top: 0,
  //     opacity: 1
  //   }, 500);
  //   $('#weather-section .content .details .l1').delay(600).animate({
  //     left: 0,
  //     opacity: 1
  //   }, 500);
  //   $('#weather-section .content .details .l2').delay(900).animate({
  //     left: 0,
  //     opacity: 1
  //   }, 500);
  //   $('#weather-section .content .details .l3').delay(1200).animate({
  //     left: 0,
  //     opacity: 1
  //   }, 500);
  //   $('#weather-section .content .learn-more').delay(1500).animate({
  //     opacity: 1
  //   }, 500);
  // }
});
