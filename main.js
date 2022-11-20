function preload(){
  Nose = loadImage("download_4_-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', oreva);
}
nose_x= 0;
nose_y= 0;

function modelloaded(){
  console.log("Loaded!");
}

function oreva(results){
  if(results.length > 0){
    console.log(results);
    nose_x = results[0].pose.nose.x -168;
    nose_y = results[0].pose.nose.y -85;
  }
}

function draw(){
   image(video, 0, 0, 300, 300);
   image(Nose, nose_x, nose_y, 30, 30);
}

function Takesnap(){
    save("Hello.png");
}