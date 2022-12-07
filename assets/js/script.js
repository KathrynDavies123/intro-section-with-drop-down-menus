let dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((item) => {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        let expansion = item.nextElementSibling;
        if (expansion.style.display === "block") {
            expansion.style.display ="none";
        }
        else {
            expansion.style.display = "block";
        }
    })
})