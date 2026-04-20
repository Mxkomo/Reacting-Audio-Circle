const audio = document.getElementById("audio");
const button = document.getElementById("button");

button.addEventListener('click', () => {
    if(audio.paused) {
        audio.play();
        button.textContent = "Pause audio";
    } 
    else {
        audio.pause();
        button.textContent = "Play audio";
    }
})

