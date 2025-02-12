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