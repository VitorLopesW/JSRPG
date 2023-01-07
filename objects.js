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
        "cha": 3,
        "subclass": "icyWizard",
        "trait": "Smart",
        "Portrait": "<img src='raw arts/mageFace.png' class='faceArt'>",
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


const traits = [ 
    ['debug', 'debug', 'debug', 'debug', 'debug'], 
    [-2, +2, 'cha', 'str', 'Lonely'], 
    [-2, +2, 'con', 'int', 'Smart'],  
    [-2, +2, 'str', 'cha', 'Funny']
]