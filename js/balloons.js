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
        balloonContainer.style.bottom = "0px";

        //Balloon element
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        //Random color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.background = randomColor;
        //Random duration and delay
        // const duration = 4 + Math.random() * 4;
        // balloon.style.animationDuration = duration + "s";
        // const delay = Math.random() * 5;
        // balloon.style.animationDelay = delay + "s";

        //Balloon Container random duration and delay animation
        const duration = 4 + Math.random() * 4; 
        balloonContainer.style.animationDuration = duration + "s";
        const delay = Math.random() * 5;
        balloonContainer.style.animationDelay = delay + "s";

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