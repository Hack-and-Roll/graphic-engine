
function plain(colour) {
    c.fillStyle = colour || 'blue';
    c.fillRect(0, 0, 400, 400);
}

function cloud(colour) {
    c.fillStyle = colour || 'blue';
    c.fillRect(0, 0, 400, 400);
}


var hats = {
    plain: plain,
    cloud: cloud
}

export {hats as default};