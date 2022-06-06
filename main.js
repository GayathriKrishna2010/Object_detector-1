img = "";
object = [];
status = "";

function preload() {
    img = loadImage("dog-cat.jpg");
}

function setup() {
    canvas = createCanvas(680 , 460);
    canvas.center();
    objectDetector = ml5.objectDetector('cocssd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("model Loaded");
    status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error , results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

function draw() {
    image(img , 0 , 0 , 680 , 460);
    fill('#FF0000');
    text('dog' , 45 , 75);
    noFill();
    stroke('#FF0000');
    rect(30 , 60 , 450 , 350);

    fill('#FF0000');
    text('cat' , 320 , 120);
    noFill();
    stroke('#FF0000');
    rect(300 , 90 , 270 , 320)
}