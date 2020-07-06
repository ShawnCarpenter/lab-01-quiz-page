// import functions and grab DOM elements
import { translateToAYes } from './src/translate-to-a-yes.js';
const quizButton = document.getElementById('quiz-button');
const scoreSpan = document.getElementById('score');
// initialize state

// set event listeners to update state and DOM

quizButton.addEventListener('click', () => {
    let score = 0;
    // console.log('You clicked the button');

    const user = prompt('What is your name?');
    const playing = confirm('Would you like to play a game?');
    if (!playing) {
        scoreSpan.textContent = `That's OK ${user}, maybe some other time.`;
        return;
    }
    
    const answer1 = prompt('Question 1');
    const answer2 = prompt('Question 2');
    const answer3 = prompt('Question 3');
    // console.log(answer1, answer2, answer3);
    if (translateToAYes(answer1)) score++;
    if (!translateToAYes(answer2)) score++;
    if (translateToAYes(answer3)) score++;

    scoreSpan.textContent = `Welcome ${user}! your score is: ${score}`;
});