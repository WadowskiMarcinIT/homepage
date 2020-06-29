let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".body");

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--grey");
    changeBackgroundButton.innerText = body.classList.contains("body--grey") ? "Jasny motyw" : "Ciemny motyw"});