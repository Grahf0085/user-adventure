import { getToon } from '../local-storage-utils.js';
import quests from '../quests/questList.js';
import { renderHeader } from '../render-utils.js';

renderHeader();

const toon = getToon();

function hasCompletedQuests() {
    for (let quest of quests) {
        if (!toon.quests[quest.id]) {
            return false;
        }
    }

    return true;
}

if (toon.hp <= 0 || hasCompletedQuests()) {
    window.location = '../results/';
}

const section = document.querySelector('section');

for (let quest of quests) {  // cycle through list of quests, make a anchor tag for each one with its position and title.  Put a link for all uncompleted quests.  Otherwise put a checkmark by it.

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

