function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.getElementById("presenceButton").addEventListener("click", function() {
    var menu = document.querySelector(".presenceMenu");
    menu.classList.toggle("open");
  });

  document.getElementById("temperatureButton").addEventListener("click", function() {
    var menu = document.querySelector(".temperatureMenu");
    menu.classList.toggle("open");
  });

  document.getElementById("timerButton").addEventListener("click", function() {
    var menu = document.querySelector(".timerMenu");
    menu.classList.toggle("open");
  });