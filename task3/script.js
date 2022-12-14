const trafficLightElGreen = document.querySelector('#trafficLightGreen');
const trafficLightElYellow = document.querySelector('#trafficLightYellow');
const trafficLightElRed = document.querySelector('#trafficLightRed');
const trafficLightEl = document.querySelector('.trafficLight');

function makeGreen() {
    trafficLightElGreen.style.background = ('green');
    trafficLightElRed.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightElYellow.style.background = ('yellow');
    trafficLightElGreen.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightElRed.style.background = ('red');
    trafficLightElYellow.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);
