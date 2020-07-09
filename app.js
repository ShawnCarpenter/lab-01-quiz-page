// import functions and grab DOM elements
import { translateToAYes } from './src/translate-to-a-yes.js';
const quizButton = document.getElementById('quiz-button');
const scoreSpan = document.getElementById('score');
// initialize state

// set event listeners to update state and DOM

quizButton.addEventListener('click', () => {
    let score = 0;
    let message = '';
    // console.log('You clicked the button');

    const user = prompt('What is your name?');
    const playing = confirm('Would you like to play a game?');
    if (!playing) {
        scoreSpan.textContent = `That's OK ${user}, maybe some other time.`;
        return;
    }
    
    const answer1 = prompt('Do elves get the right of way in Iceland?');
    const answer2 = prompt('Does rotten shark sound delicious?');
    const answer3 = prompt('Should bankers be jailed when they crash the economy?');
    // console.log(answer1, answer2, answer3);
    if (translateToAYes(answer1)) score++;
    if (!translateToAYes(answer2)) score++;
    if (translateToAYes(answer3)) score++;

    switch (score) {
        case 3 :
            message = `Congratulations ${user}, you got them all right`;
            break;
        case 2 :
            message = `Not bad ${user}, 2 out of three.`;
            break;
        case 1 : 
            message = `You will have to try a little harder next time ${user}`;
            break;
        default:
            `Too bad ${user}, it looks like the elves stole your answers.`;
        
    }
    scoreSpan.textContent = message;
});