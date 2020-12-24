let i = 0;
let txt = "Hello World!";
let speed = 150;

function typewriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

typewriter();
