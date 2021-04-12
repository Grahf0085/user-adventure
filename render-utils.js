import { getToon } from './local-storage-utils.js';

export function renderHeader() {

    const header = document.querySelector('header');

    const toon = getToon();

    const section = document.createElement('section');

    if (toon.hp <= 0) {
        section.textContent = `Name: ${toon.name}, Job: ${toon.job}, HP: YOU DIED, Gold: ${toon.gold}`;
    } else {
        section.textContent = `Name: ${toon.name}, Job: ${toon.job}, HP: ${toon.hp}, Gold: ${toon.gold}`;
    }

    header.append(section);

}