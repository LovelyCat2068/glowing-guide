objects = "";

function setup(){
    canvas = canvas.createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    pumpkin = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_value = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
}

function draw(){
    image(video, 0, 0, 500, 500);
}