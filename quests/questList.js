const leapingLizzy = {
    id: 'leapingLizzy',
    title: 'A Notorious Monster named Leaping Lizzy',
    map: {
        top: '193%',
        left: '30%'
    },
    image: 'LL.jpg',
    audio: '',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yObVbHtq8Dg?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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
        hp: -5,
        gold: 0
    }, {
        id: 'fight',
        description: 'Attack',
        result: `
            Brandishing your sword you let out a warrior's cry and charge at Leaping Lizzy hacking and slashing. Before long you realize how foolish you were. 
            The lizard has teeth and they are big. You stand panting, gazing, at the fancy boots on the 
            lizards feet you realize someone else will get them as the lizard jumps in the air and lands on you...squashing you to death.
        `,
        hp: -15,
        gold: 0
    }, {
        id: 'run',
        description: 'Run Away',
        result: `
            As you make a dash back to the safety of town a random orc chases you and take a bite of flesh, causing 5 hp damage.
        `,
        hp: -5,
        gold: 0
    }]
};

const absoluteVirtue = {
    id: 'absoluteVirtue',
    title: 'Longest/most difficult fight in video game history.',
    map: {
        top: '90%',
        left: '55%'
    },
    image: 'av.jpg',
    audio: '',
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

const paintbrushOfSouls = {
    id: 'paintbrushOfSouls',
    title: 'Paintbrush Of Souls',
    map: {
        top: '230%',
        left: '88%'
    },
    prerequisites: [],
    image: 'paintbrush.jpg',
    audio: 'Final Fantasy XI RotZ OST - Yuhtunga Jungle.mp3',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/P5c9-3Hr2Ag?autoplay=1&start=337" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    action: '',
    description: `
        Deep inside a ancient temple you see a canvas next to a locked door. A paintbrush you picked up from somewhere else in the temple begins to twitch.
        By focusing your thoughts on the paintbrush of souls, a new painting begins to appear on the canvas...
    `,
    choices: [{
        id: 'wait',
        description: 'wait',
        result: 'You wait 30 seconds and then succeed in projecting the image in your soul to the blank canvas. The door to a secret area is opened.',
        hp: 0,
        gold: 100
    }, {
        id: 'paint',
        description: 'paint',
        result: 'You paint a picture but the door is still locked.  A few green goblin looking things come around a corner and beat you up.',
        hp: -5,
        gold: 0
    }]
};

export const quests = [
    leapingLizzy,
    absoluteVirtue,
    paintbrushOfSouls,
];

export default quests;