var TOTAL_DOTS = 50;
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 20;
var PACMAN_COLOR = '#fffb00';

var DOTS_INTERVAL = CANVAS_WIDTH / TOTAL_DOTS;
var PACMAN_RADIUS = DOTS_INTERVAL / 2;

function drawPacLine(percentage) {
    var canvas = document.getElementById('pac-line');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Pac-dots
        ctx.save();
        ctx.translate(DOTS_INTERVAL / 2, CANVAS_HEIGHT / 2);
        for (var i = Math.floor(percentage / 2); i < TOTAL_DOTS; i++) {
            ctx.save();
            ctx.translate(i * DOTS_INTERVAL, 0);
            ctx.beginPath();
            ctx.arc(0, 0, 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
        ctx.restore();

        // Pacman
        ctx.save();
        ctx.translate((percentage - 1) * DOTS_INTERVAL / 2, CANVAS_HEIGHT / 2);
        ctx.fillStyle = PACMAN_COLOR;
        ctx.beginPath();
        if (percentage % 2 === 0) {
            ctx.arc(0, 0, PACMAN_RADIUS, 0, Math.PI * 2);
        } else {
            ctx.arc(0, 0, PACMAN_RADIUS, Math.PI / 7, -Math.PI / 7);
        }
        ctx.lineTo(0, 0);
        ctx.fill();
        ctx.restore();
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

        var i = 0;
        setInterval(function() {
            drawPacLine(i);
            i = (i + 1) % 100;
        }, 200);
    }
);
