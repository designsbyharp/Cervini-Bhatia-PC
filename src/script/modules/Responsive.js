function removeDarkBtn(){
    const heroCta = document.querySelector('#js-hero-cta');
    heroCta.classList.remove('dark--btn');
}

let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if(viewportWidth > 767){
    alert("yes");
}else{
    alert("no");
}