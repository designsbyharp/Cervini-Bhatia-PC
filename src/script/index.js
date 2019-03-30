import "../styles/index.scss";

import "../images/2ndpaper.jpg";
import "../images/landing.jpeg";

import IntroductionAnimations from './modules/IntroductionAnimations';

//Instaniate
function runOnLoad(){
    new IntroductionAnimations()
    .AnimateTimelines();
};

runOnLoad();

let heroCta = document.querySelector("#js-hero-cta");

let removeDarkCta = function () {
    heroCta.classList.remove("cta-btn--dark");
};
let addDarkCta = function () {
    heroCta.classList.add("cta-btn--dark");
};

// Define our viewportWidth variable
let viewportWidth;

// Set/update the viewportWidth value
let setViewportWidth = function(){
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
};

//Log the viewport width into the console
let logWidth = function(){
    if(viewportWidth > 1020){
        removeDarkCta();
    }else{
        addDarkCta();
    }
};

// Set our initial width and log it
setViewportWidth();
logWidth();

// On resize events, recalculate and log
window.addEventListener('resize', function(){
    setViewportWidth();
    logWidth();
});
