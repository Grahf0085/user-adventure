import { findById, updateToon } from '../local-storage-utils.js';
import quests from './questList.js';

const params = new URLSearchParams(window.location.search);  // returns everything after '/?' in URL?

const questId = params.get('id');  // returns everything afyer 'id=' in URL

const quest = findById(questId, quests); // returns one of three objects in questList.js based on id in questList.js

const image = document.querySelector('img');
const audio = document.querySelector('audio');
const title = document.querySelector('h2');
const description = document.querySelector('p');
const form = document.querySelector('form');
const section = document.querySelector('section');

const button = document.createElement('button');  // not sure why I used query for previous five elements and made a element here
button.textContent = 'Choose';

title.textContent = quest.title;

image.src = '../assets/' + quest.image;
audio.src = '../assets/' + quest.audio;
description.textContent = quest.description;

for (let choice of quest.choices) {  // iterate through array of objects in questList.js

    const label = document.createElement('label');

    const radio = document.createElement('input');

    radio.type = 'radio';
    radio.name = 'usersChoice';
    radio.value = choice.id;
    radio.required = 'true';

    label.append(choice.description, radio);

    form.append(label);
}

form.append(button);

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const formData = new FormData(form);
    const choiceId = formData.get('usersChoice');
    const choice = findById(choiceId, quest.choices);
    updateToon(questId, choice);

    form.classList.add('hidden');

    description.textContent = choice.result;
    const returnMap = document.createElement('button');
    returnMap.textContent = 'Return to Map';
    section.append(returnMap);

    returnMap.addEventListener('click', () => {
        window.location = ('../map');
    });
});



