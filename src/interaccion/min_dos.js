window.addEventListener("scroll",function () {
    let Doom = document.querySelector(".backend");
    Doom.classList.toggle("ti_p",window.scrollY > 500);
})
window.addEventListener("scroll",function () {
    let Doom = document.querySelector(".cont_front");
    Doom.classList.toggle("ti",window.scrollY > 500);
})