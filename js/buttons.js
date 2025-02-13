const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const questionScreen = document.getElementById("question");
const resultScreen = document.getElementById("resultScreen");

//Makes it so that whenever you try to click the no button, it will move to a random location
noButton.addEventListener("mouseover", function (e) {

    const sounds = ["sike.mp3", "tooslow.mp3", "toobad.mp3", "lame.mp3", "tryagain.mp3"];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);
    audio.play();
    audio.volume = 1;

    const container = document.querySelector(".button-container");
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    // Calculate the maximum allowed positions so that the button stays inside the container.
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    // Generate random positions
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    window.myloveAudio.resume();
});

//If she manages to click no, it will alert her to try again
noButton.addEventListener("click", function (e) {
    alert("Try again!");

    //Reset location
    noButton.style.left = "75%";
    noButton.style.top = "50%";
  });
  
  //When click "Yes," transition to the celebration screen.
  yesButton.addEventListener("click", function (e) {
    questionScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    if (window.myloveAudio) {
      window.myloveAudio.pause();
      window.myloveAudio.currentTime = 0;
    }

    // Play lesgo.mp3 once (2 seconds duration)
    let lesgoAudio = new Audio("lesgo.mp3");
    lesgoAudio.play().catch((err) => console.error("Lesgo play error:", err));

    // After 2 seconds, start fettywap.mp3 on loop
    setTimeout(() => {
      let fettyAudio = new Audio("fettywap.mp3");
      fettyAudio.loop = true;
      fettyAudio.play().catch((err) => console.error("Fettyplay error:", err));
      window.fettyAudio = fettyAudio; 
    }, 2000);
    setTimeout(() => {
      startFloatingObjects();
    }, 12000);
    launchBalloons();
    startCountdown();
  });