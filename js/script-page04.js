const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function(){

    document.getElementById("imgLand").innerHTML = "<img src='assets/technology/image-launch-vehicle-landscape.jpg'></img>";

    document.getElementById("imgPort").innerHTML = "<img src='assets/technology/image-launch-vehicle-portrait.jpg'></img>";

    document.getElementById("iname").innerHTML = "Launch Vehicle";

    document.getElementById("iinfo").innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

})

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function(){

    document.getElementById("imgLand").innerHTML = "<img src='assets/technology/image-spaceport-landscape.jpg'></img>";

    document.getElementById("imgPort").innerHTML = "<img src='assets/technology/image-spaceport-portrait.jpg'></img>";

    document.getElementById("iname").innerHTML = "Spaceport";

    document.getElementById("iinfo").innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

});

const btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", function(){

    document.getElementById("imgLand").innerHTML = "<img src='assets/technology/image-space-capsule-landscape.jpg'></img>";

    document.getElementById("imgPort").innerHTML = "<img src='assets/technology/image-space-capsule-portrait.jpg'></img>";

    document.getElementById("iname").innerHTML = "Space Capsule";

    document.getElementById("iinfo").innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

})