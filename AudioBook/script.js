
let botaoPlayPause = document.getElementById('play-pause');
let audio = document.getElementById('audio-capitulo');
let atual = 1;

let caminho = "./books/dom-casmurro/" + atual + ".mp3";
audio.setAttribute("src", caminho);

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

let capitulo = document.getElementById('capitulo')

function Proximo() {
    
    if (atual == 10) {
        atual = 0
    }

    atual += 1

    capitulo.innerHTML = "Capitulo " + atual 
    caminho = "./books/dom-casmurro/" + atual + ".mp3";
    audio.setAttribute("src", caminho);

    if (audio.paused) {
        audio.play();}

}    

function Anterior() {
    
    if (atual == 1) {
        atual = 10
    }

    atual -= 1

    capitulo.innerHTML = "Capitulo " + atual 
    caminho = "./books/dom-casmurro/" + atual + ".mp3";
    audio.setAttribute("src", caminho);

    if (audio.paused) {
        audio.play();}

}    





