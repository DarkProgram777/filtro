noseX = 0;
noseY = 0;

function preload() {
gafas = loadImage('https://i.postimg.cc/ryS7vzRb/klipartz-com-22.png');
}

function setup() {
  canvas = createCanvas(450, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(450,300);
  Pousnet = ml5.poseNet(video,CrgModelo);
  Pousnet.on('pose',gotposes);
}

function draw() {
image(video,0,0,450,300);
fill(255,0,0);
stroke(255,0,0);
image(gafas,noseX,noseY,200,100);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
function CrgModelo(){
  console.log("modelo cargado");
}
function gotposes(results){
  if(results.length>0){
    console.log(results);
     console.log("noseX "+results[0].pose.nose.x);
     console.log("noseY "+results[0].pose.nose.y);
     noseX = results[0].pose.nose.x -100;
     noseY = results[0].pose.nose.y -75;
  };
}