// IMPORT MODULES under test here:
// import example from '../example.js';

import { translateToAYes } from '../src/translate-to-a-yes.js';

const test = QUnit.test;

test('translateToAYes should take a string and return true if the string starts with the letter "y"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const answer = 'yup';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = translateToAYes(answer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('translateToAYes should take a string and return false iff the string does not start with the letter "y"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const answer = 'Nope';
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = translateToAYes(answer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

