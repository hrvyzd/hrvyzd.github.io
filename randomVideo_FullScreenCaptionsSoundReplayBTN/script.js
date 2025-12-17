// JavaScript Document

const videoPart1 = [
	{ src: "videos/red01.mp4",	caption: "You are" },
	{ src: "videos/red02.mp4", caption: "Your friend is" },
	{ src: "videos/red03.mp4", caption: "Your mother is" },
	{ src: "videos/red04.mp4", caption: "Your family is" },
	{ src: "videos/red5.mp4", caption: "You will be" }
];

const videoPart2 = [
	{ src: "videos/yellow01.mp4", caption: "terrified"},
	{ src: "videos/yellow2.mp4", caption: "surprised"},
	{ src: "videos/yellow3.mp4", caption: "excited"},
	{ src: "videos/yellow4.mp4", caption: "made unsure"},
	{ src: "videos/yellow5.mp4", caption: "relieved"}
];

const videoPart3 = [
	{ src: "videos/blue1.mp4", caption: "by loss"},
	{ src: "videos/blue2.mp4", caption: "by new wealth"},
	{ src: "videos/blue03.mp4", caption: "by a new burden"},
	{ src: "videos/blue04.mp4", caption: "by an old burden"},
	{ src: "videos/blue5.mp4",  caption: "by new connections"},
	{ src: "videos/blue6.mp4", caption: "by destiny"},
	{ src: "videos/blue7.mp4", caption: "by the past"},
	{ src: "videos/blue8.mp4",  caption: "by silence"},
	{ src: "videos/blue9.mp4",  caption: "by superstitions"},
	{ src: "videos/blue10.mp4",  caption: "by yourself/herself/themself"},
];

const musicTracks = [
	"sounds/music01.mp3",
	"sounds/music02.mp3",
	"sounds/music03.mp3"
];

const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText");
const replayBtn = document.getElementById("replayBtn");

function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array[randomIndex]);
	return array[randomIndex];
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click",buildVideo);

let playlist = []; //creates an empty array
let currentIndex = 0;

function buildVideo() {
	titleOverlay.classList.add("playing");
	player.classList.add("fullscreen");
	replayBtn.style.display = "none";
	
	//START MUSIC
	if (bgMusic) {
		bgMusic.src = picker(musicTracks);
		bgMusic.currentTime = 0;
		bgMusic.volume = 1;
		bgMusic.play().catch(err => {
			console.warn("Music play interrupted:", err);
		});
	}
	
	playlist = [
		picker(videoPart1),
		picker(videoPart2),
		picker(videoPart3)
	];
	
	currentIndex = 0;

	playCurrent();
}

function playCurrent(){
	const current = playlist[currentIndex];
	titleText.textContent = current.caption;
	
	player.src = current.src;
	player.load();
	player.play().catch(err => {
		console.warn("Play interrupted (autoplaypolicy?):", err);
	});
}

//Advance when a video ends
player.addEventListener("ended", () => {
	currentIndex++;
	if (currentIndex < playlist.length) {
		playCurrent();
	} else {
		console.log("All three parts finished.");
		fadeOutMusic();
		replayBtn.style.display = "block";
	}
});

function fadeOutMusic() {
	if (!bgMusic) return;
	
	const fadeDuration = 3000;
	const steps = 30;
	const stepTime = fadeDuration / steps;
	const volumeStep = bgMusic.volume / steps;
	
	const fadeInterval = setInterval ( () => {
		// Reduce volume but never go below 0
		bgMusic.volume = Math.max(0, bgMusic.volume - volumeStep);
		
		if (bgMusic.volume <= 0.01) {
			bgMusic.volume = 0;
			bgMusic.pause ();
			clearInterval(fadeInterval);
		}
	}, stepTime);
}