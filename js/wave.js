document.addEventListener("DOMContentLoaded", function () {
    const waveTextElems = document.querySelectorAll(".wave-text, .wave-text-fast");
    waveTextElems.forEach(elem => {
      const text = elem.textContent;
      elem.innerHTML = "";
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        if (text[i] === " ") {
          span.innerHTML = "&nbsp;";
        } else {
          span.textContent = text[i];
        }
        // Stagger the animation delay per letter
        span.style.animationDelay = `${i * 0.1}s`;
        elem.appendChild(span);
      }
    });
  });