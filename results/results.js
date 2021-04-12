import { getToon } from '../local-storage-utils.js';
import { aliveGoldMessages, deadGoldMessages, hpMessages } from './resultsMessage.js';

const user = getToon();

const isUserDead = user.hp <= 0;

let goldStatus;

if (user.gold < 20) {
    goldStatus = 'poor';
} else if (user.gold < 50) {
    goldStatus = 'modest';
} else {
    goldStatus = 'rich';
}

let hpStatus;

if (isUserDead) {
    hpStatus = 'dead';
} else if (user.hp < 10) {
    hpStatus = 'frail';
} else {
    hpStatus = 'healthy';
}

const goldMessagesToUse = isUserDead ? deadGoldMessages : aliveGoldMessages;

const resultsString = `${goldMessagesToUse[goldStatus]}. ${hpMessages[hpStatus]}`;

const section = document.querySelector('section');

section.textContent = resultsString;

const button = document.querySelector('button');

button.addEventListener('click', () => {
    localStorage.clear();

    window.location = '../index.html';
});
