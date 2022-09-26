const grid = document.querySelector('.grid');

const heroes = [
  'akali',
  'darius',
  'fizz',
  'morgana',
  'olaf',
  'rengar',
  'yasuo',
  'zoe',
];

const createElement = (tag, attributeClass) => {
  const element = document.createElement(tag);
  element.className = attributeClass;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  console.log(disabledCards);

  if(disabledCards.length == 16) {
    alert('Congratulations summoner, you won!');
  }
}

const checkCards = () => {
  const firstHero = firstCard.getAttribute('data-hero');
  const secondHero = secondCard.getAttribute('data-hero');

  if (firstHero === secondHero) {
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');7
      
      firstCard = '';
      secondCard = '';
    }, 500)
  }
}


const revealCard = ({target}) => {
  if(target.parentNode. className.includes('reveal-card')) {
    return;
  }
  
  if (firstCard === '') {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;
  } else if (secondCard === '') {
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;
    
    checkCards();
  }
}


const createCard = (hero) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'front face');
  const back = createElement('div', 'back face');
  
  front.style.backgroundImage = `url('../settings/img/${hero}.jpg')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-hero', hero)

  return card;
}

const renderCard = () => {
  const duplicateHeroes = [ ...heroes, ...heroes ];

  const shuffledHeroes = duplicateHeroes.sort(() => Math.random() - 0.5);  

  duplicateHeroes.forEach((hero) => {
    const card = createCard(hero);
    grid.appendChild(card);
  });
}

renderCard();


