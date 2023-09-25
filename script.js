//your JS code here. If required
const soundsDirectory = 'sounds/';
let audio = null;

function playSound(soundFileName) {
    stopSound();
    audio = new Audio(soundsDirectory + soundFileName);
    audio.play();
}

function stopSound() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}
