const leapingLizzy = {
    id: 'leapingLizzy',
    title: 'A Notorious Monster named Leaping Lizzy',
    map: {
        top: '155%',
        left: '30%'
    },
    image: 'LL.jpg',
    audio: 'Final Fantasy XI OST - Gustaberg.mp3',
    description: `
        While running across the dessert you notice a lizard slightly larger than the other lizards.  It's jumping around and has very nice looking boots on its feet.
    `,
    choices: [{
        id: 'kite',
        description: 'Kite leaping lizzy until more help arrives',
        result: `
            The lizard would kill you so you send a courier pigeon to a stranger in a nearby town to come help. Meanwhile, to keep the lizard from bounding away you throw 
            a rock at it to get its attention. Leaping Lizzy chases you until your friend arrives to help.  Leaping Lizzy gets a few good wacks in before your friend 
            arrives. After leaping lizard is dead the stranger takes the boots and leaves without saying a word."  
        `,
        hp: -50,
        gold: 0
    }, {
        id: 'fight',
        description: 'Attack',
        result: `
            Brandishing your sword you let out a warrior's cry and charge at Leaping Lizzy hacking and slashing. Before long you realize how foolish you were. 
            The lizard has teeth and they are big. You stand panting, gazing, at the fancy boots on the 
            lizards feet you realize someone else will get them as the lizard jumps in the air and lands on you...squashing you to death.
        `,
        hp: -1000,
        gold: 0
    }, {
        id: 'run',
        description: 'Run Away',
        result: `
            As you make a dash back to the safety of town a random orc chases you and take a bite of flesh, causing 70 hp damage.
        `,
        hp: -70,
        gold: 0
    }]
};

const absoluteVirtue = {
    id: 'absoluteVirtue',
    title: 'Longest/most difficult fight in video game history.',
    map: {
        top: '80%',
        left: '55%'
    },
    image: 'AV.png',
    audio: 'Final Fantasy XI CoP OST - Al\'Taieu.mp3',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Jbo_DNgykAE?start=30&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    // action: 'dragon-growl.aiff', What is this 
    description: `
        In 2008 a group of 18 people calling themselves "Beyond the Limit" fought a monster that had never been beat for over 18 hours.  After succumbing to emessis and fatigue they did not succeed (https://www.destructoid.com/final-fantasy-xi-boss-causes-vomiting-takes-18-hours-to-beat-99391.phtml).  Will you?
    `,
    choices: [{
        id: 'run',
        description: 'It holds the title for longest fight in video game history. You better run.',
        result: `
            You save your health and 18 hours of your life and proove you're a sane person.
        `,
        hp: 0,
        gold: 0
    }, {
        id: 'stare',
        description: 'Stare in disbelief',
        result: `
            You stare for five minutes.  Then it disappears into air.  You wonder if you'll ever see it again.
        `,
        hp: 0,
        gold: 0
    }, {
        id: 'help',
        description: 'Get 17 friends to help you',
        result: `
            Inspired by attempting the impossible, you ask 17 strangers to come help you. When the last person arrives about five hours have passed. You start the fight.
            Ten hours later you're all dead.
        `,
        hp: -10000,
        gold: 0
    }]
};

const treasure = {
    id: 'treasure',
    title: 'A Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

export const quests = [
    leapingLizzy,
    absoluteVirtue,
    treasure,
];

export default quests;