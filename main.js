music_1 = "";
music_2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload() {
    music_1 = loadSound("music.mp3");
    music_2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        scoreRightWrist = results[0].pose.keypoints[16].score;
        console.log("scoreRightWrist = " + scoreRightWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("Left Wrist x = " + leftWristX + "Left Wrist y = " + leftWristY);
        console.log("Right Wrist x = " + rightWristX + "Right Wrist y = " + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    if (scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        song.stop(music_2)

        if (music_1.isPlaying()) {
            song.play(music_1);
            document.getElementById("song_name").innerHTML = "Song  = Harry Potter Theme Song(Remix)";
        }

    }
}