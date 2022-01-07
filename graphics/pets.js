
function plain(colour) {
    c.fillStyle = colour || 'blue';
    c.fillRect(0, 0, 400, 400);
}

function cloud(colour) {
    c.fillStyle = colour || 'blue';
    c.fillRect(0, 0, 400, 400);
}


var pets = {
    plain: plain,
    cloud: cloud
}

export {pets as default};