// alert('Првиет, друг) не оставайся при фидбэке инкогнито, пожалуйста) вообще ничего не успеваю с работой своей( я доделаю до дедлайна кросс-чека и перепроверишь) спасибо и удачи нам!))')
const catalogue = [
    {
      "name": "Jennifer",
      "img": "../../images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
]
let newCatalogue = catalogue.slice()
let log = console.log;
const BODY = document.querySelector('body');
const HUMB = document.querySelector("#humb");
const NAV = document.querySelector("#nav");
const LIS = document.querySelectorAll("[data-id=nav-li]");
const SLIDER = document.querySelector("#slider");
const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');
const TMPLT_LEFT = document.querySelector('#template-left');
const TMPLT_ACTIVE = document.querySelector('#template-active');
const TMPLT_RIGHT = document.querySelector('#template-right');
log(slider)

//header
HUMB.addEventListener('click', navAppearence);

function navAppearence(e){
e.preventDefault();
NAV.classList.toggle("open");
HUMB.classList.toggle("open");
BODY.classList.toggle('body-hidden');
e.stopPropagation();
};

LIS.forEach(li => li.addEventListener('click', () => {
    NAV.classList.remove("open");
    HUMB.classList.toggle("open");
    BODY.classList.toggle('body-hidden');
    })
)
BODY.addEventListener('click', (e) => {
    if(BODY.classList.contains('body-hidden') && e.target !== nav){
        NAV.classList.remove("open");
        HUMB.classList.remove("open");
        BODY.classList.toggle('body-hidden');
        }
    }
)

//slider
const toTheLeft = () => {
    SLIDER.classList.add('transition-left');
    BTN_LEFT.removeEventListener('click', toTheLeft);
    BTN_RIGHT.removeEventListener('click', toTheRight)
};


const toTheRight = () => {
    SLIDER.classList.add('transition-right');
    BTN_LEFT.removeEventListener('click', toTheLeft);
    BTN_RIGHT.removeEventListener('click', toTheRight)
};

BTN_LEFT.addEventListener('click', toTheLeft);
BTN_RIGHT.addEventListener('click', toTheRight);


document.addEventListener("DOMContentLoaded", () => {
    // debugger
    if(window.matchMedia("(min-width: 1280px)").matches){
            let animalCard1 = createCard();
            let animalCard2 = createCard();
            let animalCard3 = createCard();
            TMPLT_LEFT.appendChild(animalCard1);
            TMPLT_LEFT.appendChild(animalCard2);
            TMPLT_LEFT.appendChild(animalCard3);
            let animalCard4 = createCard();
            let animalCard5 = createCard();
            let animalCard6 = createCard();
            TMPLT_ACTIVE.appendChild(animalCard4);
            TMPLT_ACTIVE.appendChild(animalCard5);
            TMPLT_ACTIVE.appendChild(animalCard6);
            let animalCard7 = createCard();
            let animalCard8 = createCard();
            let animalCard9 = createCard();
            TMPLT_RIGHT.appendChild(animalCard7);
            TMPLT_RIGHT.appendChild(animalCard8);
            TMPLT_RIGHT.appendChild(animalCard9);
        }
        else if(window.matchMedia("(min-width: 768px)").matches){
            let animalCard1 = createCard();
            let animalCard2 = createCard();
            TMPLT_LEFT.appendChild(animalCard1);
            TMPLT_LEFT.appendChild(animalCard2);
            let animalCard3 = createCard();
            let animalCard4 = createCard();
            TMPLT_ACTIVE.appendChild(animalCard3);
            TMPLT_ACTIVE.appendChild(animalCard4);
            let animalCard5 = createCard();
            let animalCard6 = createCard();
            TMPLT_RIGHT.appendChild(animalCard5);
            TMPLT_RIGHT.appendChild(animalCard6);
        }else if(window.matchMedia("(min-width: 320px)").matches){
            log('asdasd')
            let animalCard1 = createCard();
            TMPLT_LEFT.appendChild(animalCard1);
            let animalCard2 = createCard();
            TMPLT_ACTIVE.appendChild(animalCard2);
            let animalCard3 = createCard();
            TMPLT_RIGHT.appendChild(animalCard3);
        }
    }, {once: true}
)
const createCard = () => {
    let pet = newCatalogue[Math.floor(Math.random() * (newCatalogue.length - 0) + 0)];
    let card = document.createElement('div');
    card.classList.add('our-friends__animal-card');
    let cardPic = `<img src="${pet.img}" alt="${pet.name}">`;
    let cardName = `<p>${pet.name}</p>`;
    let cardBtn = `<button>Learn more</button>`;
    card.innerHTML = `${cardPic}${cardName}${cardBtn}`
    return card
}

SLIDER.addEventListener('animationend', (animationEvent) => {
    if(animationEvent.animationName === 'move-left'){
        SLIDER.classList.remove('transition-left');
        let leftTemplate = TMPLT_LEFT.innerHTML;
        TMPLT_ACTIVE.innerHTML = leftTemplate;
        TMPLT_LEFT.innerHTML = '';
        if(window.matchMedia("(min-width: 1280px)").matches){
            let animalCard1 = createCard();
            let animalCard2 = createCard();
            let animalCard3 = createCard();
            TMPLT_LEFT.appendChild(animalCard1);
            TMPLT_LEFT.appendChild(animalCard2);
            TMPLT_LEFT.appendChild(animalCard3);
        }
        else if(window.matchMedia("(min-width: 768px)").matches){
            let animalCard1 = createCard();
            let animalCard2 = createCard();
            TMPLT_LEFT.appendChild(animalCard1);
            TMPLT_LEFT.appendChild(animalCard2);

        }else if(window.matchMedia("(min-width: 320px)").matches){
            let animalCard1 = createCard();
            TMPLT_LEFT.appendChild(animalCard1);
        }
        BTN_LEFT.addEventListener('click', toTheLeft);
        BTN_RIGHT.addEventListener('click', toTheRight);
    }else{
        SLIDER.classList.remove('transition-right');
        let rightTemplate = TMPLT_RIGHT.innerHTML;
        TMPLT_ACTIVE.innerHTML = rightTemplate;
        TMPLT_RIGHT.innerHTML = '';
        if(window.matchMedia("(min-width: 1280px)").matches){
            let animalCard1 = createCard();
            let animalCard2 = createCard();
            let animalCard3 = createCard();
            TMPLT_RIGHT.appendChild(animalCard1);
            TMPLT_RIGHT.appendChild(animalCard2);
            TMPLT_RIGHT.appendChild(animalCard3);
        }
        else if(window.matchMedia("(min-width: 768px)").matches){
            let animalCard1 = createCard();
            let animalCard2 = createCard();
            TMPLT_RIGHT.appendChild(animalCard1);
            TMPLT_RIGHT.appendChild(animalCard2);
        }else if(window.matchMedia("(min-width: 320px)").matches){
            let animalCard1 = createCard();
            TMPLT_RIGHT.appendChild(animalCard1);
        }
        BTN_LEFT.addEventListener('click', toTheLeft);
        BTN_RIGHT.addEventListener('click', toTheRight);
    }
}
)

// SLIDER.addEventListener('animationend', toTheRight)

