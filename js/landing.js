const startButton = document.getElementById("startButton");
const landingScreen = document.getElementById("landing");
const initialScreen = document.getElementById("question");

startButton.addEventListener("click", function () {
  landingScreen.classList.add("hidden");
  initialScreen.classList.remove("hidden");
});
