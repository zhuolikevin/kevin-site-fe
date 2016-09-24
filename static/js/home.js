var PacProgress = require('pacprogress');

$(document)
    .ready(function() {
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
            color: '#5f91a0',
            svgStyle: null
        });
        bar.animate(1.0);

        var i = 0,
            pacLine = new PacProgress({
                width: 800,
                height: 20
            });
        setInterval(function() {
            pacLine.draw(i);
            i = (i + 1) % 100;
        }, 500);
    }
);
