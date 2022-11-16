const spreadMenu = document.querySelector("#spreadMenu");

function openMenu () {
    let menu = document.querySelector(".sidebar");
    menu.style.right = "0px";
}

spreadMenu.addEventListener("click", openMenu);

const closeButton = document.querySelector("#closeButton");

function closeMenu () {
    let menu = document.querySelector(".sidebar");
    menu.style.right = "-300px";
}

closeButton.addEventListener("click", closeMenu);