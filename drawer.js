import backgrounds from "./graphics/backgrounds.js";
import pets from "./graphics/pets.js";
import bodies from "./graphics/bodies.js";
import faces from "./graphics/faces.js";
import arms from "./graphics/arms.js";
import hats from "./graphics/hats.js";
console.log("hello");

// context
var canvas = document.querySelector("canvas");
window.c = canvas.getContext("2d");

function drawBackground(key, colour) {
    backgrounds[key](colour);
}

function drawFace(key, colour) {
    c.fillStyle = '#FF000044';
    c.fillRect(90, 80, 140, 140);
    faces[key](colour);
}

function drawBody(key, colour) {
    c.fillStyle = '#AAFF0088';
    // c.fillRect(90, 200, 140, 200);
    bodies[key](colour);
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

function drawPet(key, colour) {
/*    c.fillStyle = '#FFFFFFAA';
    c.fillRect(260, 200, 140, 200);*/
    pets[key](colour);
}

drawBackground("forest", '#9999F0');
drawBody("beach", '#F0EEAA');
drawArms();
drawFace("dude", '#593a00');
drawHat();
drawPet("pat", '#b700ff');
