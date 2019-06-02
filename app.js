const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
let missed = 0;
const startBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const mainDiv = document.querySelector('.main-container');

startBtn.addEventListener('click', (e) => {
    mainDiv.removeChild(overlay);
});

const phrases = 
['Bus driving is fun', 
'You will never guess this one', 
'Bears are scary', 
'cannot touch this', 
'We are the champions my friend'];

const getRandomPhraseAsArray = (arr) => {
    let randomSelector = arr[Math.floor(Math.random() * arr.length)];
    let  random = randomSelector.split('');
    return random;
};



const phraseArray = getRandomPhraseAsArray(phrases);