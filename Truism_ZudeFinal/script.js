// Select video element and text box
const videoPlayer = document.getElementById("videoPlayer");
const textBox = document.getElementById("textBox");

// Array of video sources
const videoSources = ["videos/playingWithFire.mp4",
					  "videos/treeHug.mp4",
					  "videos/pool.mp4",
					  "videos/reflection.mp4",
					  "videos/sky.mp4"]; 

// Current video index, starts with first video
let currentVideoIndex = 0;

// Array to store playback time for each video
const videoTimes = [0, 0, 0, 0, 0];

var isSoundEnabled = false;
function getRandomIndex() {
	let newIndex;
	do {
		newIndex = Math.floor(Math.random() * videoSources.length);
	} while (newIndex === currentVideoIndex);
	return newIndex;
}

function toggleVideo() {
	
	if (isSoundEnabled === false) {
		videoPlayer.muted = false;
		isSoundEnabled = true;
	}
	
	videoTimes[currentVideoIndex] = videoPlayer.currentTime;
	currentVideoIndex = getRandomIndex();
	
	videoPlayer.src = videoSources[currentVideoIndex]; 
	videoPlayer.load();
	videoPlayer.currentTime = videoTimes[currentVideoIndex];
	videoPlayer.play();
}

// Add a click event to text box to switch videos
textBox.addEventListener("click", toggleVideo);