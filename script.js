const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const questionScreen = document.getElementById("question");
const resultScreen = document.getElementById("resultScreen");

//Makes it so that whenever you try to click the no button, it will move to a random location
noButton.addEventListener("mouseover", function (e) {
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
    launchBalloons();
    startCountdown();
  });

  //Launch balloons
function launchBalloons() {
    const balloonsContainer = document.getElementById("balloons");

    //Red, White, Pink
    const colors = ["#FF3366", "#FFFFFF", "#FF69B4"];

    // Create a number of balloons (adjust the count as desired)
    for (let i = 0; i < 20; i++) {
        //Create container for balloon and string
        const balloonContainer = document.createElement("div");
        balloonContainer.classList.add("balloon-container");
        //Randomized positions
        const leftPos = Math.random() * 100;
        balloonContainer.style.left = leftPos + "%";
        balloonContainer.style.bottom = "-100px";

        //Balloon element
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        //Random color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.background = randomColor;
        //Random duration and delay
        const duration = 4 + Math.random() * 4;
        balloon.style.animationDuration = duration + "s";
        const delay = Math.random() * 5;
        balloon.style.animationDelay = delay + "s";

        //String element
        const string = document.createElement("div");
        string.classList.add("string");

        //Add the balloon and string to the container
        balloonContainer.appendChild(balloon);
        balloonContainer.appendChild(string);
        //Add to main container
        balloonsContainer.appendChild(balloonContainer);
    }
  }
  
  //Start a countdown to Valentines Day
  function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    let now = new Date();
    let year = now.getFullYear();
    let valentineDate = new Date(year, 1, 14);
    // Update the countdown every second
    const timer = setInterval(function () {
      now = new Date();
      const diff = valentineDate - now;
      if (diff <= 0) {
        clearInterval(timer);
        countdownElement.innerHTML = "Happy Valentine's Day!";
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        countdownElement.innerHTML =
          days +
          "d " +
          hours +
          "h " +
          minutes +
          "m " +
          seconds +
          "s until Valentine's Day!";
      }
    }, 1000);
  }