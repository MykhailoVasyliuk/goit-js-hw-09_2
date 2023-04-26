const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartColorSwich);
stopBtn.addEventListener('click', onStopColorSwich);

let startColorSwichId = null;


function onStartColorSwich() {
    startColorSwichId = setInterval(StartColorSwich, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;

    function StartColorSwich() {
        body.style.backgroundColor = getRandomHexColor();
    }
}

function onStopColorSwich() {
    clearInterval(startColorSwichId);

    startBtn.disabled = false;
    stopBtn.disabled = true;

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
