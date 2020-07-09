// import functions and grab DOM elements
import { translateToAYes, 
    userMessage, 
    updateClass } from './src/translate-to-a-yes.js';

const quizButton = document.getElementById('quiz-button');
const scoreSpan = document.getElementById('score');
// initialize state

// set event listeners to update state and DOM


quizButton.addEventListener('click', () => {
    let score = 0;
    let message = '';
    
    const answerClass = scoreSpan.classList.item(0);
     

    const user = prompt('What is your name?');
    const playing = confirm('Would you like to play a game?');
    
    const questions = ['Do elves get the right of way in Iceland?', 
        'Does rotten shark sound delicious?', 
        'Should bankers be jailed when they crash the economy?'];
    const answers = [];
    const correctAnswers = [true, false, true];
    if (answerClass) scoreSpan.classList.remove(answerClass);
    if (!playing) {
        scoreSpan.textContent = `That's OK ${user}, maybe some other time.`;
        return;
    }
    
    questions.forEach(question => {
        answers.push(prompt(question));
    });
    
    
    for (let i = 0; i < answers.length; i++) {
        if (translateToAYes(answers[i]) === correctAnswers[i]) {
            score++;
        }
    }
    
    message = userMessage(score, user);
    const className = updateClass(score);
    
    scoreSpan.textContent = message;
    scoreSpan.classList.add(className);
});