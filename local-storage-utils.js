const TOON = 'TOON';

export function findById(id, array) {
    for (let arrayItem of array) {
        if (arrayItem.id === id) return arrayItem;
    }
}

export function getToon() {

    const stringyToon = localStorage.getItem(TOON);

    if (!stringyToon) return {};

    const parsedToon = JSON.parse(stringyToon);

    return parsedToon;
}

export function setToon(parsedToon) {

    const stringyToon = JSON.stringify(parsedToon);

    localStorage.setItem(TOON, stringyToon);
}

export function updateToon(questID, choice) {

    const toon = getToon();

    toon.hp += choice.hp;
    toon.gold += choice.gold;
    toon.quests[questID] = true;

    setToon(toon8);
}