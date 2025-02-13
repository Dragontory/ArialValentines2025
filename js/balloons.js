const popSound = new Audio('pop.mp3');
 
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
        balloonContainer.style.bottom = "-200px";

        // Set random duration and delay on the container for the rise animation
        const duration = 4 + Math.random() * 4;
        balloonContainer.style.animationDuration = duration + "s";
        const delay = Math.random() * 5;
        balloonContainer.style.animationDelay = delay + "s";

        // Create the balloon element
        const balloon = document.createElement("div");
        // Randomly choose between a regular balloon or a heart balloon
        if (Math.random() < 0.5) {
          balloon.classList.add("balloon");
        } else {
          balloon.classList.add("heart-balloon");
        }
        // Set a random color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.background = randomColor;

        // Add a click listener to pop the balloon
        balloon.addEventListener("click", function (e) {
          e.stopPropagation();
          // Play the pop sound
          popSound.currentTime = 0;
          popSound.play();
    
          for (let j = 0; j < 4; j++) {
            let shard = document.createElement("div");
            shard.classList.add("shard");
            let tx = (Math.random() - 0.5) * 100; // between -50 and 50px
            let ty = (Math.random() - 0.5) * 100; // between -50 and 50px
            shard.style.setProperty('--tx', tx + 'px');
            shard.style.setProperty('--ty', ty + 'px');
            shard.style.left = '50%';
            shard.style.top = '50%';
            balloonContainer.appendChild(shard);
          }
    
          // Apply a pop animation.
          if (balloon.classList.contains("heart-balloon")) {
            balloon.classList.add("pop-heart");
          } else {
            balloon.classList.add("pop");
          }
          // Remove the entire container after the pop animation ends
          balloon.addEventListener("animationend", function () {
            balloonContainer.remove();
          });
        });

        // Append the balloon to the container and the container to the main container
        balloonContainer.appendChild(balloon);
        balloonsContainer.appendChild(balloonContainer);
    }
  }