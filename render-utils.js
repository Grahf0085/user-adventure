import { getToon } from './local-storage-utils.js';

export function renderHeader() {

    const header = document.querySelector('header');

    const toon = getToon();

    const div = document.createElement('div');

    if (toon.hp <= 0) {
        div.textContent = `Name: ${toon.name}, Job: ${toon.job}, HP: YOU DIED, Gold: ${toon.gold}`;
    } else {
        div.textContent = `Name: ${toon.name}, Job: ${toon.job}, HP: ${toon.hp}, Gold: ${toon.gold}`;
    }

    header.append(div);

}