import backgrounds from "./graphics/backgrounds.js";
console.log("hello");

// context
var canvas = document.querySelector("canvas");
window.c = canvas.getContext("2d");

function drawBackground(key, colour) {
    backgrounds[key](colour);
}

function drawFace() {
    c.fillStyle = '#FF000044';
    c.fillRect(90, 80, 140, 140);
}

function drawBody() {
    c.fillStyle = '#AAFF0088';
    c.fillRect(90, 200, 140, 200);
}

function drawHat() {
    c.fillStyle = '#00000088';
    c.fillRect(70, 50, 180, 80);
}

function drawArms() {
    c.fillStyle = '#FF00FF88';
    c.fillRect(20, 200, 80, 180);
    c.fillRect(220, 200, 100, 180);
}

function drawPet() {
    c.fillStyle = '#FFFFFFAA';
    c.fillRect(260, 200, 140, 200);
}

drawBackground("plain", '#00AAAA88');
drawBody();
drawArms();
drawFace();
drawHat();
drawPet();
