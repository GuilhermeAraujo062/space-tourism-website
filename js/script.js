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

// Pagina 01 Destination
// Moon

const moonButton = document.querySelector("#planetMoon");

moonButton.addEventListener('click', function(){
    document.getElementById("ipicture").innerHTML = "<img src='assets/destination/image-moon.png'>";

    document.getElementById("iname").innerHTML = "Moon";

    document.getElementById("idescricao").innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";

    document.getElementById("idistancia").innerHTML = "384,400 km";

    document.getElementById("itempo").innerHTML = "3 Days";
})

// Mars

const marsButton = document.querySelector("#planetMars");

marsButton.addEventListener("click", function(){
    document.getElementById("ipicture").innerHTML = "<img src='assets/destination/image-mars.png'>";

    document.getElementById("iname").innerHTML = "Mars";

    document.getElementById("idescricao").innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";

    document.getElementById("idistancia").innerHTML = "225 MIL. km";

    document.getElementById("itempo").innerHTML = "9 months";
})

// Europa

const euroButton = document.querySelector("#planetEuropa");

euroButton.addEventListener("click", function(){
    document.getElementById("ipicture").innerHTML = "<img src='assets/destination/image-europa.png'>";

    document.getElementById("iname").innerHTML = "Europa";

    document.getElementById("idescricao").innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";

    document.getElementById("idistancia").innerHTML = "628 MIL. km";

    document.getElementById("itempo").innerHTML = "3 Years";
})

// Titan

const titanButton = document.querySelector("#planetTitan");

titanButton.addEventListener("click", function(){
    document.getElementById("ipicture").innerHTML = "<img src='assets/destination/image-titan.png'>";

    document.getElementById("iname").innerHTML = "Titan";

    document.getElementById("idescricao").innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";

    document.getElementById("idistancia").innerHTML = "1.6 BIL. km";

    document.getElementById("itempo").innerHTML = "7 years";
})