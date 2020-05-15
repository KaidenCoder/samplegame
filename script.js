const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// 
// 

//List of words for game
const words = [
    'Jesus answered it is written man shall not live on bread alone but on every word that comes from the mouth of God',
    'Jesus answered him it is also written do not put the Lord your God to the test',
    'Jesus said to him away from me satan for it is written worship the Lord your God and serve him only',
    'From that time on Jesus began to preach repent for the kingdom of heaven has come near',
    'Come follow me Jesus said and I will send you out to fish for people',
    'Blessed are the poor in spirit for theirs is the kingdom of heaven',
    'Blessed are those who mourn for they will be comforted',
    'Blessed are the meek for they will inherit the earth',
    'Blessed are those who hunger and thirst for righteousness for they will be filled',
    'Blessed are the merciful for they will be shown mercy',
    'Blessed are the pure in heart for they will see God',
    'Blessed are the peacemakers for they will be called children of God',
    'Blessed are those who are persecuted because of righteousness for theirs is the kingdom of heaven',
    'Blessed are you when people insult you persecute you and falsely say all kinds of evil against you because of me',
    'Rejoice and be glad because great is your reward in heaven for in the same way they persecuted the prophets who were before you',
    'You are the salt of the earth but if the salt loses its saltiness how can it be made salty again it is no longer good for anything except to be thrown out and trampled underfoot',
    'You are the light of the world a town built on a hill cannot be hidden',
    'Neither do people light a lamp and put it under a bowl instead they put it on its stand and it gives light to everyone in the house',
    'In the same way let your light shine before others that they may see your good deeds and glorify your Father in heaven',
    'Do not think that I have come to abolish the law or the prophets I have not come to abolish them but to fulfill them',
    'For truly I tell you until heaven and earth disappear not the smallest letter not the least stroke of a pen will by any means disappear from the Law until everything is accomplished',
    'Therefore anyone who sets aside one of the least of these commands and teaches others accordingly will be called least in the kingdom of heaven',
    'but whoever practices and teaches these commands will be called great in the kingdom of heaven',
    'For I tell you that unless your righteousness surpasses that of the pharisees and the teachers of the law you will certainly not enter the kingdom of heaven',
    'Anyone who says to a brother or sister raca is answerable to the court and anyone who says you fool will be in danger of the fire of hell',
    'Leave your gift there in front of the altar first go and be reconciled to them then come and offer your gift',
    'But I tell you that anyone who is angry with a brother or sister will be subject to judgement again',
    'Settle matters quickly with your adversary who is taking you to court',
    'Do it while you are still together on the way or your adversary may hand you over to the judge and the judge may hand you over to the officer and you may be thrown into prison',
    'Truly I tell you you will not get out until you have paid the last penny',
    'You have heard that it was said you shall not commit adultery',
    'But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart',
    'If your right eye causes you to stumble gouge it out and throw it away it is better for you to lose one part of your body than for your whole body to be thrown into hell',
    'And if your right hand causes you to stumble cut it off and throw it away it is better for you to lose one part of your body than for your whole body to go into hell',
    'It has been said anyone who divorces his wife must give her a certificate of divorce',
    'But I tell you that anyone who divorces his wife except for sexual immorality makes her the victim of adultery and anyone who marries a divorced woman commits adultery',
    'Again you have heard that it was said to the people long ago do not break your oath but fulfill to the Lord the vows you have made',
    'But I tell you do not swear an oath at all either by heaven for it is God throne',
    'or by the earth for it is his footstool or by jerusalem for it is the city of the Great King',
    'And do not swear by your head for you cannot make even one hair white or black',
    'All you need to say is simply yes or no anything beyond this comes from the evil one',
    'You have heard that it was said eye for eye and tooth for tooth',
    'But I tell you do not resist an evil person if anyone slaps you on the right cheek turn to them the other cheek also',
    'And if anyone wants to sue you and take your shirt hand over your coat as well',
    'If anyone forces you to go one mile go with them two miles',
    'Give to the one who asks you and do not turn away from the one who wants to borrow from you',
    'You have heard that it was said love your neighbor and hate your enemy',
    'But I tell you love your enemies and pray for those who persecute you',
    'that you may be children of your Father in heaven he causes his sun to rise on the evil and the good and sends rain on the righteous and the unrighteous',
    'If you love those who love you what reward will you get are not even the tax collectors doing that',
    'And if you greet only your own people what are you doing more than others do not even pagans do that',
    'Be perfect therefore as your heavenly Father is perfect'
];

// Init word
let randomWord;

// Init score
let score = 15;

// Init time
let time = 60;

// Set difficulty
let difficulty = localStorage.getItem('difficulty') !== null ?
    localStorage.getItem('difficulty') : 'easy';

// Set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null ?
    localStorage.getItem('difficulty') : 'easy';

// Focus on text on start
text.focus()

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generates random word from array
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

// Add word to DOM
function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

// Update Score
function updateScore() {

    score--;
    scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';

    if (time === 0) {
        clearInterval(timeInterval)
        //end game

        gameOver()
        // coronaDestroyed()

    }

    if (score === 0) {
        time++;
    }


}

// Game Over, show end screen
function gameOver() {
    endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <h2>Your remaining items are ${score}</h2>
        <button onclick="location.reload()">Play Again</button>
    `;

    endgameEl.style.display = 'flex';
}

function coronaDestroyed() {

    endgameEl.innerHTML = `
        <h1>Hoorah!</h1>
        <h2>You have completed words</h2>
        <button onclick="location.reload()">Play Again</button>
    `;


    endgameEl.style.display = 'flex';
}




addWordToDOM();

// Event listeners


// Typing
text.addEventListener('input', e => {
    const insertedText = e.target.value;
    if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();


        // Clear
        e.target.value = '';
        if (difficulty === 'hard') {

            time += 30;
        } else if (difficulty === 'medium') {

            time += 40;
        } else {

            time += 50;
        }
        updateTime()
    }

    if (score === 0) {

        coronaDestroyed()
    }
})

// Settings btn click
settingsBtn.addEventListener('click', () =>
    settings.classList.toggle('hide'))

// Settings select
settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty)
})

