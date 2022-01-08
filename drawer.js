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
    // c.fillStyle = '#FF000044';
    // c.fillRect(90, 80, 140, 140);
    faces[key](colour);
}

function drawBody(key, colour) {
    // c.fillStyle = '#AAFF0088';
    // c.fillRect(90, 200, 140, 200);
    bodies[key](colour);
}

function drawHat(key, colour) {
    // c.fillStyle = '#00000088';
    // c.fillRect(70, 50, 180, 80);
    hats[key](colour);
}

function drawArms(key, colour) {
    // c.fillStyle = '#FF00FF22';
    // c.fillRect(20, 200, 80, 180);
    // c.fillRect(220, 200, 100, 180);
    arms[key](colour);
}

function drawPet(key, colour) {
/*    c.fillStyle = '#FFFFFFAA';
    c.fillRect(260, 200, 140, 200);*/
    pets[key](colour);
}

drawBackground("forest", null);
drawBody("beach", '#F0EEAA');
drawArms("normal", "purple");
drawFace("dude", '#593a00');
drawHat("cap", null);
drawPet("pat", '#b700ff');
