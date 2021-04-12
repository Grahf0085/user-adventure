const TOON = 'TOON';  // I dont know

export function findById(id, array) {  //not local storage util. OK!
    for (let arrayItem of array) {
        if (arrayItem.id === id) return arrayItem;
    }
}

export function getToon() {  // local storage getter

    const stringyToon = localStorage.getItem(TOON);

    if (!stringyToon) return {};

    const parsedToon = JSON.parse(stringyToon);

    return parsedToon;
}

export function setToon(parsedToon) {  // local storage setter

    const stringyToon = JSON.stringify(parsedToon);

    localStorage.setItem(TOON, stringyToon);
}

export function updateToon(questID, choice) {  //local storage setter

    const toon = getToon();
    toon.hp += choice.hp;
    toon.gold += choice.gold;
    toon.quests[questID] = true;

    setToon(toon);
}