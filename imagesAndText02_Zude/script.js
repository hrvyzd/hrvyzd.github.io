// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

//Array of slides (3 images)
const slides = [
	{ src: 'images/image01.jpg', 
	 alt:'lowLitPurpleMannequin',
	 caption: 'Nostalgia'
	},
	{ src: 'images/image02.jpg',
	 alt:'second',
	 caption: 'an empty dark room, only stark details considered'
	},
	{ src: 'images/image03.jpg',
	 alt: 'third',
	 caption: 'the worst, amplified brightly.'
	},
	{ src: 'images/image04.jpg',
	alt:'fourth',
	caption: 'i\'m lost with nothing to ground me,'
	},
	{ src: 'images/image05.jpg',
	alt:'fifth',
	caption: 'nobody but my memories to reel me in.'
	},
	{ src: 'images/image06.jpg',
	alt:'sixth',
	caption: 'i\'m shouting'
	},
	{ src: 'images/image07.jpg',
	alt:'seventh',
	caption: 'can you hear me?'
	},
	{ src: 'images/image08.jpg',
	alt:'eight',
	caption: 'you can help guide me'
	},
	{ src: 'images/image09.jpg',
	alt:'ninth',
	caption: 'light my path of doubt'
	},
	{ src: 'images/image10.jpg',
	alt:'tenth',
	caption: 'into the land of certainty.'}
];

let currentIndex = 0;

// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});

// Helper to show slide
function showSlide(index) {
	const slide = slides[index];
	mainImage.src = slide.src;
	mainImage.alt = slide.alt;
	caption.textContent = slide.caption;
}

// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}

// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);