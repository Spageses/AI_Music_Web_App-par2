music_1 = "";
music_2 = "";

function preload(){
    music_1 = loadSound("music.mp3");
    music_2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function drawn(){
    image(video, 0, 0, 600, 500);
}