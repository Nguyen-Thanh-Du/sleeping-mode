const sleepBtn = document.getElementById("sleepBtn");
const overlay = document.querySelector(".fade-overlay");
const spotifyPlayer = document.getElementById("spotifyPlayer");

// when user clicks "Sleep Now"
sleepBtn.addEventListener("click", () => {
  overlay.classList.add("active");
});

// when fade completes
overlay.addEventListener("transitionend", () => {
  spotifyPlayer.style.opacity = 1;
});