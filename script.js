window.addEventListener("load", () => {
    const audio = document.getElementById("backsound");
    const playButton = document.getElementById("play-button");
  
    audio.muted = false;
  
    const playPromise = audio.play();
  
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          playButton.style.display = "none";
        })
        .catch(() => {
          playButton.style.display = "inline-block";
        });
    }
  
    playButton.addEventListener("click", () => {
      audio.play();
      playButton.style.display = "none";
    });
  });
  