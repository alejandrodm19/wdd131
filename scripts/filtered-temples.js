const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");
yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;


const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
  hamburger.textContent = menu.classList.contains("open") ? "✖" : "☰";
});

menu.classList.add("open");
