// IMPORT MODULES under test here:
// import example from '../example.js';

import { translateToAYes } from '../src/translate-to-a-yes.js';

const test = QUnit.test;

test('translateToAYes should take a string and return true if the string starts with the letter "y"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const answer1 = 'yup';
    const answer2 = 'Yes';
    const answer3 = 'y';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = translateToAYes(answer1);
    const actual2 = translateToAYes(answer2);
    const actual3 = translateToAYes(answer3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
});


test('translateToAYes should take a string and return false iff the string does not start with the letter "y"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const answer1 = 'Nope';
    const answer2 = 'N0';
    const answer3 = 'N';
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = translateToAYes(answer1);
    const actual2 = translateToAYes(answer2);
    const actual3 = translateToAYes(answer3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
});

