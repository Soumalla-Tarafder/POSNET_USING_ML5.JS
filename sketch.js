// display images through browser
// let abc_Img;
// capture video through webcam 
// let capture;

let capture;
let posenet;
let noseX, noseY;
let reyeX, reyeY;
let leyeX, leyeY;
let singlePose;
let skeleton;
let actor;

function setup() {
    // createCanvas(1800, 1500);

    // display images through browser
    // abc_Img = loadImage('images/abc.jpg')

    // capture video through webcam 
    // capture = createCapture(VIDEO);
    // capture.hide();

    createCanvas(2000, 2000);
    capture = createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose', receivedPoses);

    // actor = loadImage('images/abc.jpg');
}

function receivedPoses(poses) {
    console.log(poses);
    if (poses.length > 0) {
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
        // noseX = singlePose.nose.x;
        // noseY = singlePose.nose.y;

        // leyeX = singlePose.leftEye.x;
        // leyeY = singlePose.leftEye.y;

        // reyeX = singlePose.rightEye.x;
        // reyeY = singlePose.rightEye.y;


    }

    console.log(noseX + " " + noseY);

}

function modelLoaded() {
    console.log('model has loaded');

}

function draw() {
    // ====draw shapes
    // background(200);
    // point(200, 200);
    // line(200, 200, 300, 300);
    // triangle(100, 200, 300, 400, 150, 450);
    // rect(500, 200, 300, 100);
    // ellipse(600, 300, 100, 100);
    // stroke and color
    // fill(112, 100, 48, 100);
    // stroke(255, 0, 0);
    // strokeWeight(5);
    // ellipse(600, 300, 100, 100);
    // stroke(0, 255, 0);
    // ellipse(400, 200, 200, 200);


    // fill(255);
    // ellipse(mouseX, mouseY, 50, 50);

    // ======images and videos(webcam)

    // display images through browser
    // image(abc_Img, mouseX, mouseY, 100, 100);

    // capture video through webcam 
    // image(capture, 0, 0, 800, 600);


    image(capture, 0, 0);
    fill(255, 0, 0);
    // ellipse(noseX, noseY, 15);
    // ellipse(leyeX, leyeY, 15);
    // ellipse(reyeX, reyeY, 15);
    if (singlePose) {
        for (let i = 0; i < singlePose.keypoints.length; i++) {
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 10);
        }
        stroke(255, 255, 255);
        strokeWeight(5);
        for (let j = 0; j < skeleton.length; j++) {
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }

        // image(actor, singlePose.nose.x - 40, singlePose.nose.y - 60, 100, 100)

    }


}