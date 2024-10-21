//some functionality for button 
var toggleButton = document.getElementById("btn");
var skillsSection = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (skillsSection) {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        }
        else {
            skillsSection.style.display = "none";
        }
    }
});
