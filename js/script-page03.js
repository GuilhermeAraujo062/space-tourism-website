const astro1Button = document.querySelector("#btnAstro1");

astro1Button.addEventListener("click", function(){

    document.getElementById("prof").innerHTML = "Commander"

    document.getElementById("ipicture").innerHTML = "<img src='assets/crew/image-douglas-hurley.png'></img>";

    document.getElementById("iname").innerHTML = "Douglas Hurley";

    document.getElementById("iinfo").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";

});

const astro2Button = document.querySelector("#btnAstro2");

astro2Button.addEventListener ("click", function(){

    document.getElementById("prof").innerHTML = "Mission Specialist"

    document.getElementById("ipicture").innerHTML = "<img src='assets/crew/image-mark-shuttleworth.png'></img>";

    document.getElementById("iname").innerHTML = "Mark Shuttleworth";

    document.getElementById("iinfo").innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";

});

const astro3Button = document.querySelector("#btnAstro3");

astro3Button.addEventListener("click", function(){

    document.getElementById("prof").innerHTML = "Pilot"

    document.getElementById("ipicture").innerHTML = "<img src='assets/crew/image-victor-glover.png'></img>";

    document.getElementById("iname").innerHTML = "Victor Glover";

    document.getElementById("iinfo").innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";

});

const astro4Button = document.querySelector("#btnAstro4");

astro4Button.addEventListener("click", function(){

    document.getElementById("prof").innerHTML = "Flight Engineer"

    document.getElementById("ipicture").innerHTML = "<img src='assets/crew/image-anousheh-ansari.png'></img>";

    document.getElementById("iname").innerHTML = "Anousheh Ansari";

    document.getElementById("iinfo").innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";

});