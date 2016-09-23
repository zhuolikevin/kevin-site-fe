function drawBackground() {
    var canvas = document.getElementById('background-canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillRect(0, 0, 150, 150);   // Draw a rectangle with default settings
        ctx.save();                  // Save the default state

        ctx.fillStyle = '#09F';      // Make changes to the settings
        ctx.fillRect(15, 15, 120, 120); // Draw a rectangle with new settings
        //
        ctx.save();                  // Save the current state
        ctx.fillStyle = '#FFF';      // Make changes to the settings
        ctx.globalAlpha = 0.5;
        ctx.fillRect(30, 30, 90, 90);   // Draw a rectangle with new settings
        ctx.restore();               // Restore previous state
        ctx.fillRect(45, 45, 60, 60);   // Draw a rectangle with restored settings
        ctx.restore();               // Restore original state
        ctx.fillRect(60, 60, 30, 30);
    }
}

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

        drawBackground();
    }
);
