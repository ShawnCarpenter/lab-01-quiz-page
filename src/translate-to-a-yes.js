export function translateToAYes(answer) {
    const firstLetter = answer.charAt(0).toLowerCase();
    return (firstLetter === 'y');
    // return answer.charAt(0).toLowerCase() === 'y';

    // Is the second option too short? 
}
export function userMessage(score, user) {
    let message = '';

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
        case 0 :
            message = `Too bad ${user}, it looks like the elves stole your answers.`;
            break;
        
    }
    return message;
}

export function updateClass(score) {
    let className = '';
    switch (score) {
        case 3 :
            className = 'all-right';
            break;
        case 2 :
            className = 'two-right';
            break;
        case 1 : 
            className = 'one-right';
            break;
        case 0 :
            className = 'none-right';
            break;
            
    }
    return className;
}

    
        
    