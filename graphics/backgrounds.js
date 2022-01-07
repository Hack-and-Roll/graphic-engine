
function plain(colour) {
    c.fillStyle = colour || 'blue';
    c.fillRect(0, 0, 400, 400);
}

function cloud(colour) {
    c.fillStyle = colour || 'blue';
    c.fillRect(0, 0, 400, 400);
}


var backgrounds = {
    plain: plain,
    cloud: cloud
}

export {backgrounds as default};