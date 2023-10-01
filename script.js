//your JS code here. If required

function applause1 () {
	const audio = document.createElement("audio");
	audio.src = "./sounds/applause1.mp3"
	audio.play();
}
function boo () {
	const audio = document.createElement("audio");
	audio.src = "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a"
	audio.play();
}
function gasp () {
	const audio = document.createElement("audio");
	audio.src = "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"
	audio.play();
}
function tada () {
	const audio = document.createElement("audio");
	audio.src = "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"
	audio.play();
}
function victory () {
	const audio = document.createElement("audio");
	audio.src = "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a"
	audio.play();
}
function wrong () {
	const audio = document.createElement("audio");
	audio.src = "http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg"
	audio.play();
}
function stopSound () {
	const stoped1 = document.getElementQuerySelector("div>buttons");

	stoped1.pause();
	stoped1.currentTime = 0;
	
}