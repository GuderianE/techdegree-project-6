const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const mainDiv = document.querySelector('.main-container');
const keyRow = document.querySelector('.keyrow');
const tries = document.getElementsByClassName('tries');

let missed = 0;

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

// Checks if the guess matches a letter and returns the result
const checkLetter = (guess) => {
    let match = null;
    const letter = document.querySelectorAll('.letter');
    for (let i = 0; i < letter.length; i++) {
        let show = letter[i].textContent.toLowerCase();
        if (show === guess.textContent.toLowerCase()) {
            console.log('match');
            letter[i].style.transition = 'all 1s';
            letter[i].className += ' show';
            match = true;
        } 
    }
    return match;
};

// listens to the clicked button and disables it
qwerty.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.setAttribute('disabled', true);
        const letterFound = checkLetter(e.target);
        if (letterFound === null) {
            tries[missed].style.display = 'none';
            missed += 1;
            console.log('missed');
        }
        // checks if the player won or lost
        const checkWin = () => {
            const show = document.querySelectorAll('.show');
            const letter = document.querySelectorAll('.letter');
            if (missed >= 5) {
                console.log('lose');
                overlay.className = 'lose';
                overlay.innerHTML = '<h1>You Lose</h1>' + '<br>' + '<button class=btn__reset onclick=location=URL>Try again</button>';
                mainDiv.appendChild(overlay);

            } else if (show.length === letter.length) {
                console.log('win');
                overlay.className = 'win';
                overlay.innerHTML = '<h1>You Won</h1>' + '<br>' + '<button class=btn__reset onclick=location=URL>Play again</button>';
                mainDiv.appendChild(overlay);
            }
        }
        checkWin();
    }
  
});

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);