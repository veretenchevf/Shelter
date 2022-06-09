const catalogue = [
  {
    name: 'Jennifer',
    img: '../../images/pets-jennifer.png',
    type: 'Dog',
    breed: 'Labrador',
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Sophia',
    img: '../../images/pets-sophia.png',
    type: 'Dog',
    breed: 'Shih tzu',
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: '1 month',
    inoculations: ['parvovirus'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Woody',
    img: '../../images/pets-woody.png',
    type: 'Dog',
    breed: 'Golden Retriever',
    description: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    age: '3 years 6 months',
    inoculations: ['adenovirus', 'distemper'],
    diseases: ['right back leg mobility reduced'],
    parasites: ['none'],
  },
  {
    name: 'Scarlett',
    img: '../../images/pets-scarlett.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    age: '3 months',
    inoculations: ['parainfluenza'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Katrine',
    img: '../../images/pets-katrine.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    age: '6 months',
    inoculations: ['panleukopenia'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Timmy',
    img: '../../images/pets-timmy.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    age: '2 years 3 months',
    inoculations: ['calicivirus', 'viral rhinotracheitis'],
    diseases: ['kidney stones'],
    parasites: ['none'],
  },
  {
    name: 'Freddie',
    img: '../../images/pets-freddie.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    age: '2 months',
    inoculations: ['rabies'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Charly',
    img: '../../images/pets-charly.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    age: '8 years',
    inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
    diseases: ['deafness', 'blindness'],
    parasites: ['lice', 'fleas'],
  },
];

let newCatalogue = catalogue.slice();
newCatalogue = newCatalogue.concat([...catalogue], [...catalogue], [...catalogue], [...catalogue], [...catalogue]);
const randValue = newCatalogue.splice(0, Math.floor(Math.random() * 8));
newCatalogue.push(...randValue);

const BODY = document.querySelector('body');
const HUMB = document.querySelector('#humb');
const NAV = document.querySelector('#nav');
const LIS = document.querySelectorAll('[data-id=nav-li]');
const PAG_BTNS = document.querySelector('.our-friends__pagination-buttons');
const BTN_START = document.querySelector('.start');
const BTN_PREV = document.querySelector('.prev');
const BTN_ACTIVE = document.querySelector('.our-friends__page-btn.active');
const BTN_NEXT = document.querySelector('.next');
const BTN_END = document.querySelector('.end');
const MODAL = document.querySelector('#modal');
const CATALOGUE = document.querySelector('.our-friends__catalogue');
document.addEventListener('DOMContentLoaded', () => {
  newCatalogue.forEach((pet) => {
    const card = document.createElement('div');
    card.setAttribute('id', 'animal-card');
    card.classList.add('our-friends__animal-card');
    card.setAttribute('data-name', `${pet.name}`);
    const cardPic = `<img src="${pet.img}" alt="${pet.name}">`;
    const cardName = `<p>${pet.name}</p>`;
    const cardBtn = '<button>Learn more</button>';
    card.innerHTML = `${cardPic}${cardName}${cardBtn}`;
    card.addEventListener('click', popup);
    card.addEventListener('click', createModal);
    CATALOGUE.appendChild(card);
  })
  , { once: true };
});

// header
HUMB.addEventListener('click', navAppearence);

function navAppearence(e) {
  e.preventDefault();
  NAV.classList.toggle('open');
  HUMB.classList.toggle('open');
  BODY.classList.toggle('body-hidden');
  e.stopPropagation();
}

LIS.forEach((li) => li.addEventListener('click', () => {
  NAV.classList.remove('open');
  HUMB.classList.toggle('open');
  BODY.classList.toggle('body-hidden');
}));
BODY.addEventListener('click', (e) => {
  if (BODY.classList.contains('body-hidden') && e.target !== NAV) {
    NAV.classList.remove('open');
    HUMB.classList.remove('open');
    BODY.classList.toggle('body-hidden');
  }
});

// Pagination
let page = BTN_ACTIVE.innerText = 1;
let maxPage;
PAG_BTNS.addEventListener('click', () => {
  let catalogueBottom;

  if (window.matchMedia('(min-width: 1280px)').matches) {
    catalogueBottom = '-500%';
    maxPage = 6;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    catalogueBottom = '-1100%';
    maxPage = 12;
  } else if (window.matchMedia('(min-width: 320px)').matches) {
    catalogueBottom = '-1535%';
    maxPage = 16;
  }

  if (page == maxPage) {
    BTN_START.removeAttribute('disabled');
    BTN_PREV.removeAttribute('disabled');
    BTN_NEXT.setAttribute('disabled', 'true');
    BTN_END.setAttribute('disabled', 'true');
  } else if (page != 1 && page != maxPage) {
    BTN_START.removeAttribute('disabled');
    BTN_PREV.removeAttribute('disabled');
    BTN_NEXT.removeAttribute('disabled');
    BTN_END.removeAttribute('disabled');
  } else if (page == 1) {
    BTN_START.setAttribute('disabled', 'true');
    BTN_PREV.setAttribute('disabled', 'true');
    BTN_NEXT.removeAttribute('disabled');
    BTN_END.removeAttribute('disabled');
  }
  BTN_ACTIVE.innerText = `${page}`;
});

BTN_START.addEventListener('click', () => {
  CATALOGUE.style.top = '0%';
  BTN_START.setAttribute('disabled', 'true');
  BTN_PREV.setAttribute('disabled', 'true');
  BTN_END.removeAttribute('disabled');
  page = 1;
});
BTN_PREV.addEventListener('click', (e) => {
  if (parseInt(getComputedStyle(CATALOGUE).top) === 0) {
    BTN_PREV.setAttribute('disabled', 'true');
  } else {
    CATALOGUE.style.top = `${parseInt(getComputedStyle(CATALOGUE).top) + 930}px`;
    page -= 1;
  }
});
BTN_NEXT.addEventListener('click', (e) => {
  if (page === maxPage) {
    BTN_NEXT.setAttribute('disabled', 'true');
  } else {
    CATALOGUE.style.top = `${parseInt(getComputedStyle(CATALOGUE).top) - 930}px`;
    page += 1;
  }
});

BTN_END.addEventListener('click', () => {
  if (window.matchMedia('(min-width: 1280px)').matches) {
    CATALOGUE.style.top = '-500%';
    BTN_START.removeAttribute('disabled');
    BTN_END.setAttribute('disabled', 'true');
    page = 6;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    CATALOGUE.style.top = '-1100%';
    BTN_START.removeAttribute('disabled');
    BTN_END.setAttribute('disabled', 'true');
    page = 12;
  } else if (window.matchMedia('(min-width: 320px)').matches) {
    CATALOGUE.style.top = '-1535%';
    page = 16;
  }
});

// popup
function popup(e) {
  BODY.classList.toggle('body-hidden-slider');
  e.stopPropagation();
}

BODY.addEventListener('click', (e) => {
  if (BODY.classList.contains('body-hidden-slider') && e.target.closest('#modal') !== MODAL) {
    MODAL.style.display = 'none';
    BODY.classList.toggle('body-hidden-slider');
    MODAL.innerHTML = '';
  }
});

function createModal() {
  const pet = newCatalogue.find((pet) => pet.name === `${this.getAttribute('data-name')}`);

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('modal__close-btn');
  closeBtn.addEventListener('click', () => {
    MODAL.style.display = 'none';
    BODY.classList.toggle('body-hidden-slider');
    MODAL.innerHTML = '';
  });

  const pic = document.createElement('img');
  pic.src = `${pet.img}`;
  pic.alt = `${pet.name}`;
  pic.classList.add('modal__pic');
  modal.appendChild(pic);

  const discBlock = document.createElement('div');
  discBlock.classList.add('discBlock');

  const name = document.createElement('h3');
  name.innerText = `${pet.name}`;
  name.classList.add('discBlock__name');
  discBlock.appendChild(name);

  const type = document.createElement('p');
  type.innerHTML = `<p>${pet.type} - ${pet.breed}</p>`;
  type.classList.add('discBlock__type');
  discBlock.appendChild(type);

  const disc = document.createElement('p');
  disc.innerText = `${pet.description}`;
  disc.classList.add('discBlock__disc');
  discBlock.appendChild(disc);

  const details = document.createElement('ul');
  details.classList.add('discBlock__details');
  details.innerHTML = `
        <li class='discBlock__li'>Age: ${pet.age}</li>
        <li class='discBlock__li'>Inoculations: ${pet.inoculations}</li>
        <li class='discBlock__li'>Diseases: ${pet.diseases}</li>
        <li class='discBlock__li'>Parasites: ${pet.parasites}</li>`;
  discBlock.appendChild(details);
  modal.appendChild(discBlock);
  modal.appendChild(closeBtn);
  MODAL.appendChild(modal);
  MODAL.style.display = 'block';
}
