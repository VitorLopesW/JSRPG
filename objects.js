const barbarian = {
    'imgBig': '<img class="borderHorizontal" src="raw arts/barbarian.png">',
    'imgBigFemale': '<img class="borderHorizontal" src="raw arts/barbarian2.png">'

}
const warrior = {
    'imgBig': '<img class="borderHorizontal" src="raw arts/battlecry.png">',
    'imgBigFemale': '<img class="borderHorizontal" src="raw arts/battlecry2.png">'

}
const mage = {
    'imgBig': '<img class="borderHorizontal" src="raw arts/mage.png">',
    'imgBigFemale': '<img class="borderHorizontal" src="raw arts/mage2.png">'

}

const leftArray = ['<div onclick="backgroundChoosed(' + "'noble'" + ')" c" class="flex" style="background-image: url(' + "'raw arts/Background/01LB.png'); background-position: 10% 0;" +
'background-size: 850px 298px; border: 1px solid rgb(7, 7, 7)">' +
'<div style="width: 500px"></div>' +
'<div style="font-size: 16px; text-align: justify; margin-right: 10px;"><div style="font-size: 30px; text-align: center; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black">Noble</div>' +
'<div style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;"> as a noble you have blue blood you never thought you would be an adventurer when your family fell from grace your only choice for keeping your life standard was to become an adventurer. You will Start the game with +50 gold and +2 charisma </div>' +
'</div> </div>', 
'<div onclick="backgroundChoosed(' + "'servant'" + ')" c class="flex" style="background-image: url(' + "'raw arts/Background/02LB.png'); background-position: 10% 0;" +
'background-size: 850px 298px; border: 1px solid rgb(7, 7, 7)">' +
'<div style="width: 500px"></div>' +
'<div style="font-size: 16px; text-align: justify; margin-right: 10px;"><div style="font-size: 30px; text-align: center; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black">Servant</div>' +
'<div style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;">You were always poor, living serving a rich family in exchange for food and housing. One day you become tired from the tyranny from the the system and fled. You will start with only with 5 gold but will get +2 strength, +2 dexterity, +1 constitution </div>' +
'</div> </div>',
]
const rightArray = [0, 
    '<div onclick="backgroundChoosed(' + "'paladindynasty'" + ')" class="flex" style="background-image: url(' + "'raw arts/Background/04LP.png'); background-position: 270% 0;" +
    'background-size: 850px 298px; border: 1px solid rgb(7, 7, 7)">' +
    '<div style="font-size: 16px; text-align: justify; margin-left: 10px;"><div style="font-size: 30px; text-align: center; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black">Paladin Dynasty</div>' +
    '<div style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;"> You born from a family of paladins, honour and hard work is a must. as a young age your family patron give you a special mission, leave them behind and create your own story. You will start with a special armour and a healing magic. </div>' + 
    '</div>' + '<div style="width: 500px"></div>' + '</div>',
]

const charTomatoes = [
    'Strength is being able to crush a tomato.',
    'Dexterity is being able to dodge a tomato.',
    'Constitution is being able to eat a bad tomato.',
    'Intelligence is knowing a tomato is a fruit.',
    'Wisdom is knowing not to put a tomato in a fruit salad.',
    'Charisma is being able to sell a tomato based fruit salad.'
]

const playerObject = {
        "name": "Davian",
        "class": "mage",
        "sex": "male",
        "str": 0,
        "dex": 1,
        "con": -1,
        "int": 6,
        "wis": 3,
        'gold': 50,
        'level': 1,
        'xp': 0,
        'quest': 0,
        "cha": 3,
        "subclass": "icyWizard",
        "trait": "Smart",
        "Portrait": "<img src='raw arts/mageFace.png'>",
        "fullArt": "<img src='raw arts/mage.png'>"

}

const playerObjectBackUp = {
    name: '',
    class: '',
    sex: '',
    str: 0,
    dex: 0,
    con: 0, 
    int: 0,
    wis: 0,
    cha: 0,
    subclass: '',
    trait: '',
}


const playerInventory = {
    "debug": "debug",
    "wand": [
        0
    ],
    "Light Clothes": [
        0
    ]
}


const playerMagic = {
    "debug": "debug",
    "Magic Missil": [
        0
    ],
    "Frost": [
        0
    ]
}





const traits = [ 
    ['debug', 'debug', 'debug', 'debug', 'debug'], 
    [-2, +2, 'cha', 'str', 'Lonely'], 
    [-2, +2, 'con', 'int', 'Smart'],  
    [-2, +2, 'str', 'cha', 'Funny']
]

