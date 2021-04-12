import { getToon } from '../local-storage-utils.js';
import quests from '../quests/questList.js';

const toon = getToon();

if (toon.hp <= 0 || hasCompletedQuests()) {
    window.location = '../results/';
}

function hasCompletedQuests() {
    for (let quest of quests) {
        if (!toon.quests[quest.id]) {
            return false;
        }
    }

    return true;
}

const section = document.querySelector('section');

for (let quest of quests) {

    const anchorTag = document.createElement('a');

    anchorTag.classList.add('quest');

    anchorTag.style.top = quest.map.top;
    anchorTag.style.left = quest.map.left;

    anchorTag.textContent = quest.title;

    if (!toon.quests[quest.id]) {
        anchorTag.href = `../quests/?id=${quest.id}`;
    }
    if (toon.quests[quest.id]) {
        anchorTag.classList.add('completed');
    }

    section.append(anchorTag);
}

