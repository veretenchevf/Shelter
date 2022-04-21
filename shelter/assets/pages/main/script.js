// alert('Првиет, друг) не оставайся при фидбэке инкогнито, пожалуйста) вообще ничего не успеваю с работой своей( я доделаю до дедлайна кросс-чека и перепроверишь) спасибо и удачи нам!))')
const humb = document.querySelector("#humb");
const nav = document.querySelector("#nav");
humb.addEventListener('click', navAppearence);

function navAppearence(e){
e.preventDefault();
nav.classList.toggle("open");
humb.classList.toggle("open");
};
