// Slider Service
const dotsList = document.querySelectorAll(".service__dot");
const serviceList = document.querySelectorAll(".service-item");

dotsList.forEach((dotItem, indexDot) => {
	dotItem.addEventListener("touchstart", () => {
		const activeDot = document.querySelector(".service__dot--active");
		if (activeDot) {
			activeDot.classList.remove("service__dot--active");
		}
		dotItem.classList.add("service__dot--active");

		serviceList.forEach((serviceItem, index) => {
			serviceItem.style.transform = "none";
			if (indexDot === 0) {
				if (index === 0) {
					serviceItem.style.transform = "";
					serviceItem.style.transition = "0.5s ease-in-out";
				}
			} else if (indexDot === dotsList.length - 1) {
				serviceItem.style.transform = `translateX(-${indexDot * 100}%)`;
				serviceItem.style.transition = "0.5s ease-in-out";
			} else {
				serviceItem.style.transform = `translateX(-${indexDot * 100}%)`;
				serviceItem.style.transition = "0.5s ease-in-out";
			}
		});
	});
});

// Checking media screen
function isMobileScreen() {
	return window.innerWidth < 768;
}

// Auto change slide section Service
let timingCounter = 0;
let currentDotIndex = 0;

function autoChangeSlide() {
	const nextDotIndex = (currentDotIndex + 1) % dotsList.length;
	dotsList[nextDotIndex].dispatchEvent(new Event("touchstart"));
	currentDotIndex = nextDotIndex;
}

if (isMobileScreen()) {
	timingCounter = setInterval(autoChangeSlide, 3000);
} else {
	clearInterval(timingCounter);
}

// Slider Feedback
const feedbackDotList = document.querySelectorAll(".feedback__dot");
const feedbackList = document.querySelectorAll(".feedback-item");

feedbackDotList.forEach((dotItem, dotIndex) => {
	const handleEvent = () => {
		const activeDot = document.querySelector(".feedback__dot--active");
		if (activeDot) {
			activeDot.classList.remove("feedback__dot--active");
		}
		dotItem.classList.add("feedback__dot--active");

		feedbackList.forEach((item, listIndex) => {
			item.style.transform = "none";
			if (dotIndex === 0) {
				if (listIndex === 0) {
					item.style.transform = "";
				}
			} else if (dotIndex === feedbackDotList.length - 1) {
				item.style.transform = `translateX(-${dotIndex * 100}%)`;
				item.style.transition = "0.5s ease-in-out";
			} else {
				item.style.transform = `translateX(-${dotIndex * 100}%)`;
				item.style.transition = "0.5s ease-in-out";
			}
		});
	};
	dotItem.addEventListener("click", handleEvent);
	dotItem.addEventListener("touchstart", handleEvent);
});

// Auto change slide section Feedback
let currentFeedbackDotIndex = 0;
function autoChangeSlideFeedback() {
	const nextFeedbackDotIndex =
		(currentFeedbackDotIndex + 1) % feedbackDotList.length;
	currentFeedbackDotIndex = nextFeedbackDotIndex;
	feedbackDotList[nextFeedbackDotIndex].dispatchEvent(new Event("touchstart"));
}

timingCounter = setInterval(autoChangeSlideFeedback, 2000);

// Contact Slider
const contactDotList = document.querySelectorAll(".contact__dot");
const contactList = document.querySelectorAll(".contact__gallery-img");

contactSlider(contactDotList, contactList);
function contactSlider(dotList, listItem) {
	dotList.forEach((dotItem, dotIndex) => {
		dotItem.addEventListener("touchstart", () => {
			const activeDot = document.querySelector(".contact__dot--active");
			if (activeDot) {
				activeDot.classList.remove("contact__dot--active");
			}
			dotItem.classList.add("contact__dot--active");
			listItem.forEach((item, index) => {
				item.style.transform = "none";
				if (dotIndex === 0) {
					if (index === 0) {
						item.style.transform = "";
					}
				} else if (dotIndex === contactDotList.length - 1) {
					item.style.transform = `translateX(-${dotIndex * 100 + index * 5}%)`;
					item.style.transition = "0.5s ease-in-out";
				} else {
					item.style.transform = `translateX(-${dotIndex * 100 + index * 5}%)`;
					item.style.transition = "0.5s ease-in-out";
				}
			});
		});
	});
}

// Auto change slide section Contact on mobile
let currentContactDotIndex = 0;
function autoChangeSlideContact() {
	const nextContactDotIndex =
		(currentContactDotIndex + 1) % contactDotList.length;
	currentContactDotIndex = nextContactDotIndex;
	contactDotList[nextContactDotIndex].dispatchEvent(new Event("touchstart"));
}

if (isMobileScreen()) {
	setInterval(autoChangeSlideContact, 3000);
} else {
	clearInterval(setInterval(autoChangeSlideContact, 3000));
}

// Controls media playback
const playBtn = document.querySelector(".about__play");
const video = document.querySelector(".about__video");
const introBtn = document.querySelector(".about__intro");
if (video && playBtn) {
	video.addEventListener("pause", () => {
		video.controls = false
		playBtn.style.visibility = "visible";
		playBtn.style.opacity = "1";
		playBtn.style.transition = "0.5s ease";
		introBtn.style.visibility = "visible";
		introBtn.style.opacity = "1";
		introBtn.style.transition = "0.5s ease";
	});

	video.addEventListener("play", () => {
		video.controls = true
		playBtn.style.visibility = "hidden";
		playBtn.style.opacity = "0";
		playBtn.style.transition = "0.5s ease";
		introBtn.style.visibility = "hidden";
		introBtn.style.opacity = "0";
		introBtn.style.transition = "0.5s ease";
	});

	video.addEventListener("ended", () => {
		video.load();
		playBtn.style.visibility = "visible";
		playBtn.style.opacity = "1";
		playBtn.style.transition = "0.5s ease";
	});

	playBtn.addEventListener("touchend", () => {
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	});
	playBtn.addEventListener("mousedown", () => {
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	});
	video.addEventListener("touchend", () => {
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	});
} else {
	console.error("Video element or play button not found");
}
