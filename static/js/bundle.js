(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function PacProgress(options) {
    this.canvasWidth = options.width;
    this.canvasHeight = options.height;
    this.pacmanColor = options.pacmanColor || '#fffb00';
    this.totalDots = 50;
    this.dotsGap = this.canvasWidth / this.totalDots;
    this.pacmanRadius = 10;
}

PacProgress.prototype.draw = function(percentage) {
    var canvas = document.getElementById('pac-line');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        // Pac-dots
        ctx.save();
        ctx.translate(this.dotsGap / 2, this.canvasHeight / 2);
        for (var i = Math.floor(percentage / 2); i < this.totalDots; i++) {
            ctx.save();
            ctx.translate(i * this.dotsGap, 0);
            ctx.beginPath();
            ctx.arc(0, 0, 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
        ctx.restore();

        // Pacman
        ctx.save();
        ctx.translate(
            (percentage - 1) * this.dotsGap / 2,
            this.canvasHeight / 2
        );
        ctx.fillStyle = this.pacmanColor;
        ctx.beginPath();
        if (percentage % 2 === 0) {
            ctx.arc(0, 0, this.pacmanRadius, 0, Math.PI * 2);
        } else {
            ctx.arc(0, 0, this.pacmanRadius, Math.PI / 7, -Math.PI / 7);
        }
        ctx.lineTo(0, 0);
        ctx.fill();
        ctx.restore();
    }
};

module.exports = PacProgress;

},{}],2:[function(require,module,exports){
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

},{"pacprogress":1}]},{},[2]);
