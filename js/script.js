const spreadMenu = document.querySelector("#spreadMenu");

function openMenu() {
    let menu = document.querySelector(".sidebar");
    menu.style.right = "0px";
}

spreadMenu.addEventListener("click", openMenu);

const closeButton = document.querySelector("#closeButton");

function closeMenu() {
    let menu = document.querySelector(".sidebar");
    menu.style.right = "-300px";
}

closeButton.addEventListener("click", closeMenu);

// Destination 

// const mars = document.querySelector("#planetMars");

// function openMars() {
//     let marte = document.querySelector(".mars-info");
//     marte.style.display = "flex";
//     let lua = document.querySelector(".moon-info");
//     lua.style.display = "none";
//     let euro = document.querySelector (".europa-info")
//     euro.style.display = "none";
// }

// mars.addEventListener("click", openMars);

// //

// const europa = document.querySelector("#planetEuropa");

// function openEuropa() {
//     let euro = document.querySelector(".europa-info");
//     euro.style.display = "flex";
// }

// europa.addEventListener("click", openEuropa);