const pink = document.querySelector(".pink");
const yellow = document.querySelector(".yellow");
const neon = document.getElementById("neonText");
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");
const navLinks = document.querySelectorAll("#navLinks a");

setInterval(() => {
  pink.style.textShadow = `0 0 ${40 + Math.random()*20}px #ff00ff`;
  yellow.style.textShadow = `0 0 ${40 + Math.random()*20}px #fff600`;
}, 200);

let angle = 0;

function rotateNeon() {
  angle += 0.5;
  neon.style.transform = `rotateY(${angle}deg)`;
  requestAnimationFrame(rotateNeon);
}

rotateNeon();

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});