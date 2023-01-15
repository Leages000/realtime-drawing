nosex=0;
nosey=0;
diference=0;
rightwristX=0;
leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,550);
    canvas.position(600,120);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function modelLoaded() {
    console.log("Posenet is initialized.");
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("noseX= "+nosex+"noseY= "+nosey);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        diference= floor(leftwristX-rightwristX);
        console.log("LeftwristX= "+leftwristX+"RightwristX= "+rightwristX);
    }
}

function draw(){
    background('#7fffd4');
    document.getElementById("square_side").innerHTML="side of square = "+diference+"px";
    fill('blue');
    stroke('green');
    square(nosex,nosey,diference);
}
