let menubutton = document.querySelector(".menubutton");
let bodybackground = document.querySelector(".backgroundcolor");
let mainnavcontainer = document.querySelector(".mainnavcontainer");
let dropdowns = document.querySelectorAll(".dropdown");
let expanded = document.querySelectorAll(".expanded");

menubutton.addEventListener("click", function () {
  mainnavcontainer.classList.toggle("open");
  bodybackground.classList.toggle("on");
  if (mainnavcontainer.classList.contains("open")) {
    menubutton.innerHTML =
      '<img src="./assets/images/icon-close-menu.svg" alt="close menu button" />';
  } else {
    menubutton.innerHTML =
      '<img src="./assets/images/icon-menu.svg" alt="menu button" />';
  }
});

for (let i = 0; i<dropdowns.length;i++) {
  dropdowns[i].addEventListener("click", function () {
    this.classList.toggle("expanded");
// closes nav menu when another is opened
    for (j=0;j<dropdowns.length;j++) {
      if (j !== i) {
        dropdowns[j].nextElementSibling.style.display = "none";
        dropdowns[j].classList.remove("expanded");
      }
    }
    let expansion = this.nextElementSibling;
    if (this.classList.contains("expanded")) {
             expansion.style.display = "flex";
           } else {
             expansion.style.display = "none";
  }
})}
