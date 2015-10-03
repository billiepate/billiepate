var dim;

function setup() {
    createCanvas(windowWidth, windowHeight);
    dim = width / 2;
    background(0);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    ellipseMode(RADIUS);
    frameRate(1);
}

function draw() {
    background(0);
    drawGradient(width / 2, height / 2);
}

function drawGradient(x, y) {
    var radius = dim / 2;
    var h = random(0, 360);
    for (var r = radius; r > 0; --r) {
        fill(h, 90, 90);
        ellipse(x, y, r, r);
        h = (h + 1) % 360;
    }
}