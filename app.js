const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
let missed = 0;
const startBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const mainDiv = document.querySelector('.main-container');
const keyRow = document.querySelector('.keyrow');

// removes overlay
startBtn.addEventListener('click', (e) => {
    mainDiv.removeChild(overlay);
});

const phrases = 
['Bus driving is fun', 
'You will never guess this one', 
'Bears are scary', 
'cannot touch this', 
'We are the champions my friend'];

// selects random phrase and spilts it into letters
const getRandomPhraseAsArray = (arr) => {
    const randomSelector = arr[Math.floor(Math.random() * arr.length)];
    const  random = randomSelector.split('');
    return random;
};

// puts it on the screen
const addPhraseToDisplay = (arr) => {
    for (let i = 0; i < arr.length; i++){
        const listItem = document.createElement('li');
        listItem.textContent = arr[i];
        const ul = phrase.firstElementChild;
        ul.appendChild(listItem);
        if (arr[i] !== ' ') {
            listItem.className = 'letter';
        } else {
            listItem.style.width = '2em';
        }
    }
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

const checkLetter = (guess) => {
    let letter = document.querySelector('.letter');
    letter = letter.textContent.toLowerCase();
    for (let i = 0; i < letter.length; i++) {
        
        if (letter[i] === guess.textContent.toLowerCase()) {
            letter.className += ' show';
            const show = letter[i].textContent.toLowerCase();
            return show;
        } else {
            return null;
        }
    }
};

qwerty.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.setAttribute('disabled', true);
    }
});

checkLetter(qwerty);