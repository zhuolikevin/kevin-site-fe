$(document).ready(function() {
  $('#home-content .name').animate({
    top: 0,
    opacity: 1
  }, 500);
  $('#home-content .slogan').delay(300).animate({
    top: 0,
    opacity: 1
  }, 500);
  $('#home-content .position').delay(600).animate({
    top: 0,
    opacity: 1
  }, 500);
  $('#home-content .contact').delay(900).animate({
    top: 0,
    opacity: 1
  }, 500);

  var bar = new ProgressBar.Circle('#profile-circle', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1000,
    color: '#cecece',
    svgStyle: null
  });
  bar.animate(1.0);

  var i = 0,
    pacProgress = new PacProgress('#pac-progressbar', {
      width: 800,
      height: 20,
      totalDots: 30,
      dotColor: '#fafafa'
    });
  setInterval(function() {
    pacProgress.draw(i);
    i = (i + 1) % 100;
  }, 500);

  var shootingStarObj = new window.ShootingStar('body');
  shootingStarObj.launch(5);
});

$('#project-canvas')
  .mouseover(function() {
    $(this).css('border-color', '#fafafa');
    $('#project-canvas .redirect-tag').css({ opacity: 1 });
  })
  .mouseleave(function() {
    $(this).css('border-color', 'transparent');
    $('#project-canvas .redirect-tag').css({ opacity: 0 });
  });
