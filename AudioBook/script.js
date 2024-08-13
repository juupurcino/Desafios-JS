
let botaoPlayPause = document.getElementById('play-pause');
let audio = document.getElementById('audio-capitulo');


function PlayPause() {
    if (audio.paused) {
        audio.play();
        botaoPlayPause.classList.remove('bi-play-circle-fill');
        botaoPlayPause.classList.add('bi-pause-circle-fill');
    } else {
        audio.pause();
        botaoPlayPause.classList.remove('bi-pause-circle-fill');
        botaoPlayPause.classList.add('bi-play-circle-fill');
    }
}

