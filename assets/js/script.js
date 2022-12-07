let menubutton = document.querySelector(".menubutton");
let mainnavcontainer = document.querySelector(".mainnavcontainer");
let dropdowns = document.querySelectorAll(".dropdown");

menubutton.addEventListener("click", function () {
  if (mainnavcontainer.style.display === "block") {
    mainnavcontainer.style.display = "none";
  } else {
    mainnavcontainer.style.display = "block";
  }
});

dropdowns.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    let expansion = item.nextElementSibling;
    item.classList.toggle("expanded");
    if (expansion.style.display === "block") {
      expansion.style.display = "none";
    } else {
      expansion.style.display = "block";
    }
  });
});
