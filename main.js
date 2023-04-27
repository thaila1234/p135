var objects = [ ];
var video = " ";
var status = " ";

function preload(){

}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    objDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: detectando objetos!"
}

function draw(){

}