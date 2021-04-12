// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getToon, setToon, updateToon } from '../local-storage-utils.js';

const test = QUnit.test;

test('get user object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const tucker = {
        name: 'tucker',
        job: 'Warrior',
        hp: 15,
        gold: 0,
        quests: {}
    };

    localStorage.setItem('TOON', JSON.stringify(tucker));
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getToon();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, tucker);
});

test('set user object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const tucker = {
        name: 'tucker',
        job: 'Warrior',
        hp: 15,
        gold: 0,
        quests: {}
    };

    setToon(tucker);

    const actual = JSON.parse(localStorage.getItem('TOON'));
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, tucker);
});

test('update users stuff', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const tucker = {
        name: 'tucker',
        job: 'Warrior',
        hp: 100,
        gold: 1000,
        quests: {}
    };

    localStorage.setItem('TOON', JSON.stringify(tucker));

    const choice = {
        hp: 50,
        gold: 1000
    };

    const expected = {
        name: 'tucker',
        job: 'Warrior',
        hp: 150,
        gold: 2000,
        quests: {
            leapingLizzy: true
        }
    };

    updateToon('leapingLizzy', choice);

    const actual = JSON.parse(localStorage.getItem('TOON'));
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});