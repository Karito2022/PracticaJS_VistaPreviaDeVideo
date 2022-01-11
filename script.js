console.log("page loaded...");

function playVideo(vid) {
    vid.play();
}

function pauseVideo(vid) {
    vid.Pause();
    vid.currentTime = 0;
}