window.addEventListener("scroll",function () {
    let Doom = document.querySelector(".saludo_contenedor");
    Doom.classList.toggle("ti_present",window.scrollY > 10);
})
window.addEventListener("scroll",function () {
    let Doom = document.querySelector(".parrafo_1");
    Doom.classList.toggle("ti_present",window.scrollY > 10);
})
window.addEventListener("scroll",function () {
    let Doom = document.querySelector(".parrafo_2");
    Doom.classList.toggle("ti_presente",window.scrollY > 10);
})