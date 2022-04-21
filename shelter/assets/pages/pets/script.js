const humb = document.querySelector("#humb");
const nav = document.querySelector("#nav");
humb.addEventListener('click', navAppearence);

function navAppearence(e){
e.preventDefault();
nav.classList.toggle("open");
humb.classList.toggle("open");
};