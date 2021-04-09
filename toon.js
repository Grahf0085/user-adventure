export function makeToon(formData) {

    const toon = {
        name: formData.get('name'),
        job: formData.get('job'),
        hp: 15,
        gold: 0,
        quests: {}
    };

    return toon;
}