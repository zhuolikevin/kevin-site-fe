$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
    $('#nav-bar').css({
      backgroundColor: '#f3f3f3',
      boxShadow: '0px 1px 5px rgba(0,0,0,0.2)'
    });
  } else if ($(window).scrollTop() === 0) {
    $('#nav-bar').css({
      backgroundColor: 'transparent',
      boxShadow: 'none'
    });
  }
});
