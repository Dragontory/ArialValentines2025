function startFloatingObjects() {
    // Array of image sources – ensure these files exist in your project
    const floatingImages = [
      "orange_cat.png",
      "orange_cat2.png",
      "tulip.png",
      "rose.png",
      "lily.png"
    ];
  
    function spawnObject() {
      // Choose one image at random
      const imgSrc = floatingImages[Math.floor(Math.random() * floatingImages.length)];
      const img = document.createElement("img");
      img.src = imgSrc;
      img.classList.add("floating-object");

      const fromLeft = Math.random() < 0.5;
      if (fromLeft) {
        img.style.left = "-100px";
        img.classList.add("fly-left");
      } else {
        img.style.right = "-100px"; 
        img.style.left = "auto";
        img.classList.add("fly-right");
      }
  
      const topPos = Math.random() * window.innerHeight;
      img.style.top = topPos + "px";
  
      const duration = 4 + Math.random() * 4;
      img.style.animationDuration = duration + "s";
      const delay = Math.random() * 3;
      img.style.animationDelay = delay + "s";
      document.body.appendChild(img);
  
      img.addEventListener("animationend", function() {
        img.remove();
      });
  
      const nextSpawnDelay = 1000 + Math.random() * 2000;
      setTimeout(spawnObject, nextSpawnDelay);
    }
  
    // Start the first spawn
    spawnObject();
  }
  