//some functionality for button 
const toggleButton = document.getElementById("btn")! as HTMLButtonElement;
const skillsSection = document.getElementById("skills")! ;

toggleButton.addEventListener("click", () => {
  if(skillsSection){
  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
  } else {
    skillsSection.style.display = "none";
  }
  }
});
