video = "";
status = "";

function preload() {
    video = createVideo('video.mp4');
    video.hide();
    video.size(480, 380);
}
function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}
function draw() {
    image(video, 0, 0, 480, 380);
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

    input_box = document.getElementById("navigationTextbox").value;
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume();
}