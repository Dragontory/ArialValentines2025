const startButton = document.getElementById("startButton");
const landingScreen = document.getElementById("landing");
const initialScreen = document.getElementById("question");

startButton.addEventListener("click", function () {
  landingScreen.classList.add("hidden");
  initialScreen.classList.remove("hidden");

  window.myloveAudio = new Audio("mylove.mp3");
  window.myloveAudio.volume = 0.2;
  window.myloveAudio.loop = true;
  window.myloveAudio.play().catch((err) => console.error("Audio play error:", err));
});
