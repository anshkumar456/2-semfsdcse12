let newheading =document.getElementById("heading");
newheading.textContent = "DOM Manipulation in JavaScript";
newheading.style.color = "red";
newheading.style.fontSize = "50px";

let newparagraph = document.getElementByClassName("paragraph");
newparagraph[0].innerHTML = "<strong>";     