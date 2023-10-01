//your JS code here. If required

function applause1 () {
	const audio = document.createElement("audio");
	audio.src = "./sound/applause1.mp3"
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
	const stoped = document.getElementById("btn");

	stoped.pause();
	stoped.currentTime = 0;
}