baguetteBox.run('.portfolio');

var themes = document.querySelectorAll(".themes span");
var root = document.querySelector(":root");

themes.forEach((theme) => {
    theme.addEventListener("click", (e) => {
        root.style.setProperty("--main-default-color", e.target.style.background);
    })
});