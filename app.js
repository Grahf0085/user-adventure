// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import { setToon, } from './local-storage-utils.js';
import { makeToon } from './toon.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const toon = makeToon(data);

    setToon(toon);

    window.location = './map/';
});