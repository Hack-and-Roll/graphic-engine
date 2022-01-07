var cloud = function(x, y) {
    c.fillStyle = 'white';
    c.beginPath();
    c.arc(x, y, 20, Math.PI / 2, Math.PI * 2, false);
    c.arc(x + 18, y - 15, 16, Math.PI, Math.PI * 2, false);
    c.arc(x + 40, y + 4, 16, 3 * Math.PI / 2, Math.PI / 2, false);
    c.closePath();
    c.fill();
}

var tree = function(x, y) {
    c.fillStyle = 'brown';
    c.fillRect(x, y, 12, -30);

    c.fillStyle = 'darkgreen';
    c.beginPath();
    c.moveTo(x - 12, y - 12);
    c.lineTo(x + 24, y - 12);
    c.lineTo(x + 6, y - 32);
    c.closePath();
    c.fill();
    c.beginPath();
    c.moveTo(x - 10, y - 22);
    c.lineTo(x + 22, y - 22);
    c.lineTo(x + 6, y - 50);
    c.closePath();
    c.fill();
    c.beginPath();
    c.moveTo(x - 8, y - 36);
    c.lineTo(x + 20, y - 36);
    c.lineTo(x + 6, y - 60);
    c.closePath();
    c.fill();
}

function drawPlain(colour) {
    c.fillStyle = colour || 'blue';
    c.fillRect(0, 0, 400, 400);
}

function drawCloud(colour) {
    c.fillStyle = '#9999FF';
    c.fillRect(0, 0, 400, 400);

    cloud(320, 100);
    cloud(210, 60);
    cloud(60, 110);
    cloud(50, 290);
    cloud(270, 180);
    cloud(0, 190);
    cloud(360, 280);
    cloud(230, 300);
    
}

function drawForest(colour) {
    drawCloud(colour);
    
    c.fillStyle = 'green';
    c.fillRect(0, 360, 400, 60);

    tree(380, 360);
    tree(300, 380);
    tree(260, 360);
    tree(200, 368);
    tree(340, 384);
    tree(0, 370);
    tree(60, 380);
}

var backgrounds = {
    plain: drawPlain,
    cloud: drawCloud,
    forest: drawForest
}

export {backgrounds as default};