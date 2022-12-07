let menubutton = document.querySelector(".menubutton");
let bodybackground = document.querySelector(".backgroundcolor");
let mainnavcontainer = document.querySelector(".mainnavcontainer");
let dropdowns = document.querySelectorAll(".dropdown");

menubutton.addEventListener("click", function () {
    mainnavcontainer.classList.toggle("open");
    bodybackground.classList.toggle("on");
    if (mainnavcontainer.classList.contains("open")) {
        menubutton.innerHTML =  '<img src="./assets/images/icon-close-menu.svg" alt="close menu button" />';
    }
    else {
        menubutton.innerHTML = '<img src="./assets/images/icon-menu.svg" alt="menu button" />';
    }
});

dropdowns.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    let expansion = item.nextElementSibling;
    item.classList.toggle("expanded");
    if (expansion.style.display === "flex") {
      expansion.style.display = "none";
    } else {
      expansion.style.display = "flex";
    }
  });
});
