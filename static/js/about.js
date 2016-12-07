var expPartFadeIn = function(index) {
  var curTag = '#exp-' + index;
  $(curTag + ' > .cbp_tmline')
    .animate({height: (parseInt($(curTag + ' > .cbp_tmlabel')
    .css('margin-bottom').replace(/[^0-9]/ig, '')) + $(curTag + ' > .cbp_tmlabel').height()).toString() + 'px'}, 1000);
  $(curTag + ' > .cbp_tmicon').animate({opacity: 1}, 100);
  $(curTag + ' > .cbp_tmlabel').animate({
    right: '0px',
    opacity: 1
  }, 1000);
  $(curTag + ' > .cbp_tmtime').animate({
    left: '0px',
    opacity: 1
  }, 1000);
};
$(window).scroll(function() {
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-1').position().top - $(window).height() + 100) {
    expPartFadeIn(1);
  }
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-2').position().top - $(window).height() + 100) {
    expPartFadeIn(2);
  }
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-3').position().top - $(window).height() + 100) {
    expPartFadeIn(3);
  }
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-4').position().top - $(window).height() + 100) {
    expPartFadeIn(4);
  }
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-5').position().top - $(window).height() + 100) {
    expPartFadeIn(5);
  }
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-5').position().top - $(window).height() + 100) {
    expPartFadeIn(6);
  }
  if ($(window).scrollTop() >=
    $('#experience-section .section-body').position().top + $('#exp-5').position().top - $(window).height() + 100) {
    expPartFadeIn(7);
  }
});
