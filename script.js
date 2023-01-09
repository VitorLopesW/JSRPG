sexMale = true;
let globalChoice = '';



function newGame(){
let i = document.getElementById('partOne');
let y = document.getElementById('newGame');
i.style.display = 'block';
y.style.display = 'none';
}

function characterInfo(char) {
    let i = document.getElementById('bigChar')
    let y = document.getElementById('flavorTextCharacterCreation')
    let z = document.getElementById('summaryTextCharacterCreation')
    let a = document.getElementById('divNextBtn')
    globalChoice = char
    switch(char) {
        case 'barbarian':
            classbtnRemove() // remove Class Btn and add SummartTextCharracterCreation borderHorizontal
            y.innerText = '"Blood and death are waiting like a raven in the sky i was born to die"'
            document.getElementById("barbarianBtn").classList.add('class-btnActive');
            i.innerHTML = barbarian.imgBig;
            z.innerText = " Barbarian are powerful melee class, they can use their power to overwhelm enemy with their strength and take tones of hits with their high health point.";
            a.innerHTML = '<p  class="margin10 font-XL next-btn" onclick="charaterCreationPart1(' + "'" + char+ "'" + ')">Next</p>'
            break;
        case 'warrior':
            classbtnRemove() // remove Class Btn and add SummartTextCharracterCreation borderHorizontal
            y.innerText = '"The clans are marching against the law Bagpipers play the tunes of war"'
            document.getElementById("warriorBtn").classList.add('class-btnActive');
            i.innerHTML = warrior.imgBig;
            z.innerText = "Warrior are a balanced class both good in melee and ranged attack, they can use their versatility to defeat even the most fearsome enemy";
            a.innerHTML = '<p  class="margin10 font-XL next-btn" onclick="charaterCreationPart1(' + "'" + char+ "'" + ')">Next</p>'
            break;
        case 'mage':
            classbtnRemove() // remove Class Btn and add SummartTextCharracterCreation borderHorizontal
            y.innerText = '"Mirror mirror on the wall t rue hope lies beyond the coast y' + "ou're a damned kind can't you s" + 'ee"'
            document.getElementById("mageBtn").classList.add('class-btnActive');
            i.innerHTML = mage.imgBig;
            z.innerText = "Mages are the unique class a magic user, they are weak in both melee and ranged combat but they can cast spell to defeat enemy and solve problems";
            a.innerHTML = '<p  class="margin10 font-XL next-btn" onclick="charaterCreationPart1(' + "'" + char+ "'" + ')">Next</p>'
            break;
    }


    function classbtnRemove(){
        document.getElementById("barbarianBtn").classList.remove('class-btnActive');
        document.getElementById("warriorBtn").classList.remove('class-btnActive');
        document.getElementById("mageBtn").classList.remove('class-btnActive');
        document.getElementById('summaryTextCharacterCreation').classList.add('borderHorizontal')
    }
}

function charaterCreationPart1(choice) {
    window.scrollTo(0,0); 
    let a = document.getElementById('partOne');
    let b = document.getElementById('partTwo');
    let c = document.getElementById('imgSex');
    let d = document.getElementById('divNextBtn2');
    let gender = '';
    b.style.display = 'block';
    a.style.display = 'none';
  
    sexMale == true ? document.getElementById("sexClickMale").classList.add('class-btnActive') + 
    document.getElementById("sexClickFemale").classList.remove('class-btnActive') : 
    document.getElementById("sexClickFemale").classList.add('class-btnActive') + 
    document.getElementById("sexClickMale").classList.remove('class-btnActive');
        

    if(choice == 'barbarian'){
        if(sexMale == true){
            c.innerHTML = barbarian.imgBig;
            gender = 'male';
        }
        else {
            c.innerHTML = barbarian.imgBigFemale;
            gender = 'female'
        }

    }
    else if(choice =='warrior'){
        if(sexMale == true){
            c.innerHTML = warrior.imgBig;
            gender = 'male';
        }
        else {
            c.innerHTML = warrior.imgBigFemale;
            gender = 'female';
 
        }

    }
    else {
        if(sexMale == true){
            c.innerHTML = mage.imgBig;
            gender = 'male';

        }
        else {
            c.innerHTML = mage.imgBigFemale;
            gender = 'female';

        }
        
    }
    d.innerHTML = '<p  class="margin10 font-XL next-btn" onclick="charaterCreationPart2(' + "'" + choice + "'" + " ,'" + gender + "'" + ')">Next</p>'
}
function charaterCreationPart2(choice, gender) {
    let partTwo = document.getElementById('partTwo');
    partTwo.style.display = 'none'; 
    let partThree = document.getElementById('partThree'); //deletar depois :D
    partThree.style.display = 'block'; //deletar depois :D
    playerObject.class = choice; 
    playerObject.sex = gender; 
    debugStats()
    delete playerObject.debug;
    console.log(playerObject)
    statschange()

    let face = document.getElementById('imgFace')

        switch(choice){
            case 'barbarian':
                gender == 'male'? face.innerHTML = "<img src='raw arts/barbarianFace.png' class='faceArt'>": face.innerHTML =  "<img src='raw arts/barbarian2Face.png' class='faceArt'>";
                gender == 'male'? playerObject.Portrait = "<img src='raw arts/barbarianFace.png'>": playerObject.Portrait = "<img src='raw arts/barbarian2Face.png'>";
                gender == 'male'? playerObject.fullArt = "<img src='raw arts/barbarian.png'>": playerObject.fullArt = "<img src='raw arts/barbarian2.png'>";
                break;
            case 'warrior':
                gender === 'male'? face.innerHTML = "<img src='raw arts/battlecryFace.png' class='faceArt'>" : face.innerHTML =  "<img src='raw arts/battlecry2Face.png' class='faceArt'>";
                gender == 'male'? playerObject.Portrait = "<img src='raw arts/battlecryFace.png'>": playerObject.Portrait = "<img src='raw arts/battlecry2Face.png'>";
                gender == 'male'? playerObject.fullArt = "<img src='raw arts/battlecry.png'>": playerObject.fullArt = "<img src='raw arts/battlecry2.png'>";
                break;
            case 'mage':
            gender == 'male'? face.innerHTML = "<img src='raw arts/mageFace.png' class='faceArt'>": face.innerHTML =  "<img src='raw arts/mage2Face.png' class='faceArt'>";
            gender == 'male'? playerObject.Portrait = "<img src='raw arts/mageFace.png'>": playerObject.Portrait = "<img src='raw arts/mage2Face.png'>";
            gender == 'male'? playerObject.fullArt = "<img src='raw arts/mage.png'>": playerObject.fullArt = "<img src='raw arts/mage2.png'>";
            break;
        }
    






    // logic for subclasses // -------------------------------------------------------------------
    let subclasses = document.getElementById('subHTML')
    switch(choice){
        case 'barbarian': subclasses.innerHTML= '<option value="0">Select Sub-Class:</option>' +
        '<option value="Furious">Furious</option>' +
        '<option value="Savage">Savage</option>';
        break;

        case 'warrior':  subclasses.innerHTML= '<option value="0">Select Sub-Class:</option>' +
        '<option value="Scout">Scout</option>' +
        '<option value="Rebel">Rebel</option>';
        break;

        case 'mage': 
        subclasses.innerHTML= '<option value="0">Select Sub-Class:</option>' +
        '<option value="Battle-Wizard">Battle-Wizard</option>' +
        '<option value="Icy-Wizard">Icy-Wizard</option>';




        break;

    }
    

    // edd of logic of subclasses  -------------------------------------------------------------------
}

function nameBTNCall() { // Choosen Name in character Creator 
            display = document.getElementById('nameDisplay')
            input = document.getElementById('inputName').value

            if(input != ''){
            display.innerHTML = "<div style='color: aliceblue'>" + 'Name: ' + input + "</div>"; 
            playerObject['name'] = input;
            console.log(playerObject)
            }
            else{
                display.innerHTML = "<div style='color: #d73a3a'>" + 'Name: ' + 'Error' + "</div>";
            }
}

function statsExplaMouseOver(i) { // stats 
let display = document.getElementById('statsExplanation')

display.innerText = charTomatoes[i]

}

function selectLogic(i) {
debugStats()
console.log(playerObject[traits[i][2]] )
    console.log(traits[i][2])
    console.log(traits[i][0])
        playerObject[traits[i][2]] += traits[i][0];
        playerObject[traits[i][3]] += traits[i][1];
    console.log(playerObject)
    statschange()
let displayT = document.getElementById('displayTraits')

traits[i][4] == 0 ? displayT.innerHTML = "<div>Traits: " + traits[i][4] +'</div>': displayT.innerHTML = "<div style='color: aliceblue;'>Traits: " + traits[i][4] +'</div>';
playerObject.trait = traits[i][4]
}

function statschange(){
    let strSC = document.getElementById('strN')
    let dexSC = document.getElementById('dexN')
    let conSC = document.getElementById('conN')
    let intSC = document.getElementById('intN')
    let wisSC = document.getElementById('wisN')
    let chaSC = document.getElementById('chaN')

    color('str')
    color('dex')
    color('con')
    color('int')
    color('wis')
    color('cha')

    function color(x){
        x1 = x.charAt(0).toUpperCase() + x.slice(1);
        if(x=='str'){
            if(playerObject[x] >= 0 && playerObject[x] < 3 ){
                strSC.innerHTML = "<div>" + x1 + ": " + playerObject[x] + "</div>";
                }
            else if(playerObject[x] > 2 && playerObject[x] < 5) {
                strSC.innerHTML = "<div style='color: #779775;'>" + x1+ ": " + playerObject[x] + "</div>";
                }
                else if(playerObject[x] > 4) {
                strSC.innerHTML = "<div style='color: #3eca37;'>" + x1 + ": " + playerObject[x] + "</div>";
            }
            else if(playerObject[x] < 0 && playerObject[x] > -3 ) {
                strSC.innerHTML = "<div style='color: #af4055;'>" + x1+ ": " + playerObject[x] + "</div>";
            }
                else if(playerObject[x] < -2) {
                strSC.innerHTML = "<div style='color: #cc1919;'>" + x1 + ": " + playerObject[x] + "</div>";
            }
        }
        else if(x=='dex'){
            if(playerObject[x] >= 0 && playerObject[x] < 3 ){
                dexSC.innerHTML = "<div>" + x1 + ": " + playerObject[x] + "</div>";
                }
            else if(playerObject[x] > 2 && playerObject[x] < 5) {
                dexSC.innerHTML = "<div style='color: #779775;'>" + x1+ ": " + playerObject[x] + "</div>";
                }
                else if(playerObject[x] > 4) {
                dexSC.innerHTML = "<div style='color: #3eca37;'>" + x1 + ": " + playerObject[x] + "</div>";
            }
            else if(playerObject[x] < 0 && playerObject[x] > -3 ) {
                dexSC.innerHTML = "<div style='color: #af4055;'>" + x1+ ": " + playerObject[x] + "</div>";
            }
                else if(playerObject[x] < -2) {
                dexSC.innerHTML = "<div style='color: #cc1919;'>" + x1 + ": " + playerObject[x] + "</div>";
            }
        }
        else if(x=='con'){
            if(playerObject[x] >= 0 && playerObject[x] < 3 ){
                conSC.innerHTML = "<div>" + x1 + ": " + playerObject[x] + "</div>";
                }
            else if(playerObject[x] > 2 && playerObject[x] < 5) {
                conSC.innerHTML = "<div style='color: #779775;'>" + x+ ": " + playerObject[x] + "</div>";
                }
                else if(playerObject[x] > 4) {
                conSC.innerHTML = "<div style='color: #3eca37;'>" + x + ": " + playerObject[x] + "</div>";
            }
            else if(playerObject[x] < 0 && playerObject[x] > -3 ) {
                conSC.innerHTML = "<div style='color: #af4055;'>" + x+ ": " + playerObject[x] + "</div>";
            }
                else if(playerObject[x] < -2) {
                conSC.innerHTML = "<div style='color: #cc1919;'>" + x + ": " + playerObject[x] + "</div>";
            }
        }
        else if(x=='int'){
            if(playerObject[x] >= 0 && playerObject[x] < 3 ){
                intSC.innerHTML = "<div>" + x1 + ": " + playerObject[x] + "</div>";
                }
            else if(playerObject[x] > 2 && playerObject[x] < 5) {
                intSC.innerHTML = "<div style='color: #779775;'>" + x1+ ": " + playerObject[x] + "</div>";
                }
                else if(playerObject[x] > 4) {
                intSC.innerHTML = "<div style='color: #3eca37;'>" + x1 + ": " + playerObject[x] + "</div>";
            }
            else if(playerObject[x] < 0 && playerObject[x] > -3 ) {
                intSC.innerHTML = "<div style='color: #af4055;'>" + x1+ ": " + playerObject[x] + "</div>";
            }
                else if(playerObject[x] < -2) {
                intSC.innerHTML = "<div style='color: #cc1919;'>" + x1 + ": " + playerObject[x] + "</div>";
            }
        }
        else if(x=='wis'){
            if(playerObject[x] >= 0 && playerObject[x] < 3 ){
                wisSC.innerHTML = "<div>" + x1 + ": " + playerObject[x] + "</div>";
                }
            else if(playerObject[x] > 2 && playerObject[x] < 5) {
                wisSC.innerHTML = "<div style='color: #779775;'>" + x1+ ": " + playerObject[x] + "</div>";
                }
                else if(playerObject[x] > 4) {
                wisSC.innerHTML = "<div style='color: #3eca37;'>" + x1 + ": " + playerObject[x] + "</div>";
            }
            else if(playerObject[x] < 0 && playerObject[x] > -3 ) {
                wisSC.innerHTML = "<div style='color: #af4055;'>" + x1+ ": " + playerObject[x] + "</div>";
            }
                else if(playerObject[x] < -2) {
                wisSC.innerHTML = "<div style='color: #cc1919;'>" + x1 + ": " + playerObject[x] + "</div>";
            }
        }
        else if(x=='cha'){
            if(playerObject[x] >= 0 && playerObject[x] < 3 ){
                chaSC.innerHTML = "<div>" + x1 + ": " + playerObject[x] + "</div>";
                }
            else if(playerObject[x] > 2 && playerObject[x] < 5) {
                chaSC.innerHTML = "<div style='color: #779775;'>" + x1+ ": " + playerObject[x] + "</div>";
                }
                else if(playerObject[x] > 4) {
                chaSC.innerHTML = "<div style='color: #3eca37;'>" + x1 + ": " + playerObject[x] + "</div>";
            }
            else if(playerObject[x] < 0 && playerObject[x] > -3 ) {
                chaSC.innerHTML = "<div style='color: #af4055;'>" + x1+ ": " + playerObject[x] + "</div>";
            }
                else if(playerObject[x] < -2) {
                chaSC.innerHTML = "<div style='color: #cc1919;'>" + x1 + ": " + playerObject[x] + "</div>";
            }
        }1

    }


}

function subClass(value){
let a = document.getElementById('subClassText')
let b = document.getElementById('displaySC')


    switch(playerObject.class){
        case 'barbarian':
                playerInventory['Rusty Axe'] = [0]
            break;
        case 'warrior':
                playerInventory['Rusty Sword']  = [0]
                playerInventory['Leather Armor'] = [0]
            break;
        case 'mage':
                playerInventory.wand = [0]
                playerInventory['Light Clothes'] = [0]
                playerMagic['Magic Missil'] = [0]
            break;
    }



switch(value){
    case '0': a.innerText = '';
    playerObject.subclass = '';
    b.innerHTML = "<div>Sub-Class:</div>";
    break;
    case 'Battle-Wizard':
    a.innerText = 'Forget the classic wizardry, you are a a Battle-Mage you will start with one spell of destruction randomly, a longsword (2d8 +3 of damage). Use intelligence in melee combat instead strength'
    playerObject.subclass = 'battleWizard';
    b.innerHTML = "<div style='color: aliceblue;'>Sub-Class: Battle-Wizard</div>";
    break;
    case 'Icy-Wizard': 
    a.innerText = 'As a Icy-Wizard you will start with one destruction ice spell (frost: 2d8 + 3), any Icy Spell use half of the mana rounded down! And if use any ice based magic you will roll with advantag (rolls 2 dies, use the highest number)';
    b.innerHTML = "<div style='color: aliceblue;'>Sub-Class: Icy-Wizard</div>";
    playerObject.subclass = 'icyWizard';
    playerMagic['Frost'] = [0]
    break;

}
}

function debugStats() {

    choice = playerObject.class
    console.log(choice)
    switch(choice){
        case 'barbarian':
            playerObject.str = 4;
            playerObject.dex = 2;
            playerObject.con = 4;
            playerObject.int = 0;
            playerObject.wis = 2; 
            playerObject.cha = 0;
            break;
        case 'warrior':
            playerObject.str = 2;
            playerObject.dex = 2;
            playerObject.con = 2;
            playerObject.int = 1;
            playerObject.wis = 2; 
            playerObject.cha = 3;
            break;
        case 'mage':
            console.log('debug')
            playerObject.str = 0;
            playerObject.dex = 1;
            playerObject.con = 1;
            playerObject.int = 4;
            playerObject.wis = 3; 
            playerObject.cha = 3;
            break;
        }

}


function debugStats2() {

    choice = playerObject.class
    console.log(choice)
    switch(choice){
        case 'barbarian':
            playerObject.str = 4;
            playerObject.dex = 2;
            playerObject.con = 4;
            playerObject.int = 0;
            playerObject.wis = 2; 
            playerObject.cha = 0;
            break;
        case 'warrior':
            playerObject.str = 2;
            playerObject.dex = 2;
            playerObject.con = 2;
            playerObject.int = 1;
            playerObject.wis = 2; 
            playerObject.cha = 3;
            break;
        case 'mage':
            playerObject.str = 0;
            playerObject.dex = 1;
            playerObject.con = 1;
            playerObject.int = 4;
            playerObject.wis = 3; 
            playerObject.cha = 3;
            break;
        }

}

function sexClick(sex) {
    sex == 'male' ? sexMale = true : sexMale = false;
    charaterCreationPart1(globalChoice)

}

function charaterCreationPart3() {
error = document.getElementById('divError')

if(playerObject.name == ''){ 
    error.innerHTML = "<div class='font-S' style='color: red; margin: 0px;'>Please choose a name to your character</div>"
} 
else if(playerObject.trait == ''){ 
    error.innerHTML = "<div class='font-S' style='color: red; margin: 0px;'>Please choose a trait to your character</div>"
} 
else if(playerObject.subclass == ''){ 
    error.innerHTML = "<div class='font-S' style='color: red; margin: 0px;'>Please choose a sub-class to your character</div>"
} 
else{ 
    
    let partThree = document.getElementById('partThree'); 
    partThree.style.display = 'none'; 
    let partFour = document.getElementById('partFour'); 
    partFour.style.display = 'block'; 
}
    let d1 = document.getElementById('backgroundD')
    let d2 = document.getElementById('backgroundD2')
    let d3 = document.getElementById('backgroundD3')

    d1.innerHTML = leftArray[0]
    d2.innerHTML = rightArray[1]
    d3.innerHTML = leftArray[1]

}

function backgroundChoosed(x) { // organizando todo os objetos 

switch(x){
    case 'noble':
        playerObject.background = 'Noble';
        playerObject.gold = 100 + 50;
        playerObject.cha += 2;
        playerInventory['Paladin Armor'] = [0]
        playerMagic['Magic Hands'] = [0]

        break;
    case 'servant':
        playerObject.background = 'Servant';
        playerObject.gold = 5;
        playerObject.str += 2;
        playerObject.dex += 2;
        playerObject.con += 2;
        break;
    case 'paladindynasty':
        playerObject.background = 'Paladin Dynasty';
        
}

playerObject.xp =  0;
playerObject.level = 1;
playerObject.quest = 1;
let hp = (playerObject.con * 3) + 16;
playerObject.health = hp;
let manaPoints = (playerObject.int * 2) + 5;
playerObject.mana = manaPoints;

console.log(playerObject)
console.log(playerInventory)
console.log(playerMagic)
gameStart()
} /// fim crianção personagem
gameStart()

function gameStart(){
 let newGame = document.getElementById('newGame'); // deletar depois :D
newGame.style.display = 'none'; // deletar depois :D

let partFour = document.getElementById('partFour'); 
partFour.style.display = 'none'; 

let ga = document.getElementById('game'); 
ga.style.display = 'block'; 

menuUpdate()
quest()
}
function menuUpdate() {

    


    /// html 
        menuHead = document.getElementById('menuHeader')
        menuHead.innerHTML = '<div class="flex"> <div style="margin-top: 2px; width:100px; height: 100px;" >' + playerObject.Portrait + '</div>' + "<div style = 'width: 280px'>" +
        /// Texto do menu 
            '<div style="text-align: left">' +
            '<div class="borderHorizontal">' + 
            ' Name: ' + playerObject.name + ' | Level: ' + playerObject.level + " |  XP: " + playerObject.xp + "</div>" +
            "<div style='margin:'></div>" +
            "<div class='flex'><div class='borderHorizontal'>" + 
            " Gold: " + playerObject.gold + " |  <span style='color:red'> HP: "+ playerObject.health + "</span> | <span style='color:#3597c0'> Mana: " + playerObject.mana + "</div>" + 
            "</div>" + 
         /// Texto do menu 
            "</div>" + 
                    '<div class="flex" style="gap: 2px; margin: 10px; font-size: 13px">' +
                        '<div class="squareattributes2"  id="strN1">Str: 2</div>' +
                        '<div class="squareattributes2" id="dexN1">Dex: 2</div>' +
                        '<div class="squareattributes2" id="conN1">Con: 2</div>' +
                        '<div class="squareattributes2" id="intN1">Int: 2</div>' +
                        '<div class="squareattributes2" id="wisN1">Wis: 2</div>' +
                        '<div class="squareattributes2" id="chaN1">Cha: 2</div>' +
                    '</div>' +
                    "</div>" ;
                menuHead.innerHTML += '<div class="flex" style="justify-content: space-between; gap:5px">' + 
                '<div class="square3" onclick="popUpA()">Menu</div>' +
                '<div class="square3" onclick="popUpB()">Inventory</div>' +
                '<div class="square3" onclick="popUpC()">Spell List</div>' 
                





let strSC = document.getElementById('strN1')
let dexSC = document.getElementById('dexN1')
let conSC = document.getElementById('conN1')
let intSC = document.getElementById('intN1')
let wisSC = document.getElementById('wisN1')
let chaSC = document.getElementById('chaN1')

color('str')
color('dex')
color('con')
color('int')
color('wis')
color('cha')

function color(x){
    x1 = x.charAt(0).toUpperCase() + x.slice(1);
    if(x=='str'){
        if(playerObject[x] >= 0 && playerObject[x] < 3 ){
            strSC.innerHTML = "<div>" + x1 + ": " + playerObject[x] + "</div>";
            }
        else if(playerObject[x] > 2 && playerObject[x] < 5) {
            strSC.innerHTML = "<div style='color: #779775;'>" + x1+ ": " + playerObject[x] + "</div>";
            }
            else if(playerObject[x] > 4) {
            strSC.innerHTML = "<div style='color: #3eca37;'>" + x1 + ": " + playerObject[x] + "</div>";
        }
        else if(playerObject[x] < 0 && playerObject[x] > -3 ) {
            strSC.innerHTML = "<div style='color: #af4055;'>" + x1+ ": " + playerObject[x] + "</div>";
        }
            else if(playerObject[x] < -2) {
            strSC.innerHTML = "<div style='color: #cc1919;'>" + x1 + ": " + playerObject[x] + "</div>";
        }
    }
    else if(x=='dex'){
        if(playerObject[x] >= 0 && playerObject[x] < 3 ){
            dexSC.innerHTML = "<div>" + x1 + ": " + playerObject[x] + "</div>";
            }
        else if(playerObject[x] > 2 && playerObject[x] < 5) {
            dexSC.innerHTML = "<div style='color: #779775;'>" + x1+ ": " + playerObject[x] + "</div>";
            }
            else if(playerObject[x] > 4) {
            dexSC.innerHTML = "<div style='color: #3eca37;'>" + x1 + ": " + playerObject[x] + "</div>";
        }
        else if(playerObject[x] < 0 && playerObject[x] > -3 ) {
            dexSC.innerHTML = "<div style='color: #af4055;'>" + x1+ ": " + playerObject[x] + "</div>";
        }
            else if(playerObject[x] < -2) {
            dexSC.innerHTML = "<div style='color: #cc1919;'>" + x1 + ": " + playerObject[x] + "</div>";
        }
    }
    else if(x=='con'){
        if(playerObject[x] >= 0 && playerObject[x] < 3 ){
            conSC.innerHTML = "<div>" + x1 + ": " + playerObject[x] + "</div>";
            }
        else if(playerObject[x] > 2 && playerObject[x] < 5) {
            conSC.innerHTML = "<div style='color: #779775;'>" + x+ ": " + playerObject[x] + "</div>";
            }
            else if(playerObject[x] > 4) {
            conSC.innerHTML = "<div style='color: #3eca37;'>" + x + ": " + playerObject[x] + "</div>";
        }
        else if(playerObject[x] < 0 && playerObject[x] > -3 ) {
            conSC.innerHTML = "<div style='color: #af4055;'>" + x+ ": " + playerObject[x] + "</div>";
        }
            else if(playerObject[x] < -2) {
            conSC.innerHTML = "<div style='color: #cc1919;'>" + x + ": " + playerObject[x] + "</div>";
        }
    }
    else if(x=='int'){
        if(playerObject[x] >= 0 && playerObject[x] < 3 ){
            intSC.innerHTML = "<div>" + x1 + ": " + playerObject[x] + "</div>";
            }
        else if(playerObject[x] > 2 && playerObject[x] < 5) {
            intSC.innerHTML = "<div style='color: #779775;'>" + x1+ ": " + playerObject[x] + "</div>";
            }
            else if(playerObject[x] > 4) {
            intSC.innerHTML = "<div style='color: #3eca37;'>" + x1 + ": " + playerObject[x] + "</div>";
        }
        else if(playerObject[x] < 0 && playerObject[x] > -3 ) {
            intSC.innerHTML = "<div style='color: #af4055;'>" + x1+ ": " + playerObject[x] + "</div>";
        }
            else if(playerObject[x] < -2) {
            intSC.innerHTML = "<div style='color: #cc1919;'>" + x1 + ": " + playerObject[x] + "</div>";
        }
    }
    else if(x=='wis'){
        if(playerObject[x] >= 0 && playerObject[x] < 3 ){
            wisSC.innerHTML = "<div>" + x1 + ": " + playerObject[x] + "</div>";
            }
        else if(playerObject[x] > 2 && playerObject[x] < 5) {
            wisSC.innerHTML = "<div style='color: #779775;'>" + x1+ ": " + playerObject[x] + "</div>";
            }
            else if(playerObject[x] > 4) {
            wisSC.innerHTML = "<div style='color: #3eca37;'>" + x1 + ": " + playerObject[x] + "</div>";
        }
        else if(playerObject[x] < 0 && playerObject[x] > -3 ) {
            wisSC.innerHTML = "<div style='color: #af4055;'>" + x1+ ": " + playerObject[x] + "</div>";
        }
            else if(playerObject[x] < -2) {
            wisSC.innerHTML = "<div style='color: #cc1919;'>" + x1 + ": " + playerObject[x] + "</div>";
        }
    }
    else if(x=='cha'){
        if(playerObject[x] >= 0 && playerObject[x] < 3 ){
            chaSC.innerHTML = "<div>" + x1 + ": " + playerObject[x] + "</div>";
            }
        else if(playerObject[x] > 2 && playerObject[x] < 5) {
            chaSC.innerHTML = "<div style='color: #779775;'>" + x1+ ": " + playerObject[x] + "</div>";
            }
            else if(playerObject[x] > 4) {
            chaSC.innerHTML = "<div style='color: #3eca37;'>" + x1 + ": " + playerObject[x] + "</div>";
        }
        else if(playerObject[x] < 0 && playerObject[x] > -3 ) {
            chaSC.innerHTML = "<div style='color: #af4055;'>" + x1+ ": " + playerObject[x] + "</div>";
        }
            else if(playerObject[x] < -2) {
            chaSC.innerHTML = "<div style='color: #cc1919;'>" + x1 + ": " + playerObject[x] + "</div>";
        }
    }1

}




        








    /// html
}


function quest(){
game = document.getElementById('text')

A = Math.floor(Math.random() * 1);


console.log(A)
switch (A){
    case 0:
        quest01A()
        break;

}


function quest01A(){////

 game.innerHTML = "<p style= 'margin: 15px'>"  +
"Belle Ville was a small, peaceful town nestled in the countryside hills. Most of the people there worked hard, but were generally happy. One unusual day, the daughter of one of the town's wealthiest barons disappeared without a trace. The entire town searched for the girl, but no one could find her."
+"</p>" 
+"<img src='raw arts/kidArt.png' class='borderHorizontal'>" + // img 
"<p style= 'margin: 15px'></p>"  + /// margin
"<p>As the days passed, the town of Belle Ville was in a state of panic. The disappearance of the baron's daughter had everyone on edge, and the search for the missing girl had turned up no leads." +
"<p>The town's people were at a loss for what to do. Some suggested hiring a group of mercenaries to help with the search, while others thought it best to wait and hope that the girl would turn up on her own." +
"<p>Meanwhile, the baron was beside himself with worry. He offered a generous reward to anyone who could bring his daughter home safely. Despite the reward, no one seemed to have any information about the girl's whereabouts." +
 "<p>As the days turned into weeks, the town's people began to lose hope." +
"<p style= 'margin: 15px'>"  + /// margin
" That's where your story begins. Nine days have passed since the child's disappearance. What will you do? " +
"<p style= 'margin: 15px'>" +"</p>" +
"<div class='borderHorizontalOne margin10'></div>" +
"<div id='optionHere'></div>"
OptionGame(01)

function OptionGame(x){///

optionDisplay = document.getElementById('optionHere');
optionDisplay.innerHTML +=  
"<div class='options' onclick = A01("+'"a"'+") id='optionA' >" + "Go to the tavern ask information" + '</div>' +
"<p style= 'margin: 3px'>" +"</p>" 

optionDisplay.innerHTML +=  
"<div class='options' onclick='A01()' id='optionA' >" + "(Cha Test): Talk to the town Folks" + '</div>' +
"<p style= 'margin: 3px'>" +"</p>" 

optionDisplay.innerHTML +=  
"<div class='options' onclick='option(A)' id='optionA' >" + "(Wis Test): Search for Clues" + '</div>' +
"<p style= 'margin: 3px'>" +"</p>" 

playerObject.background == 'Noble'? optionDisplay.innerHTML +=  "<div class='options' onclick='option(A)' id='optionA' >" + "(Noble): Go talk with the Baron" + '</div>' :
optionDisplay.innerHTML +=  "<div class='options' style='color: grey' >" + "(Noble): Go talk with the Baron" + '</div>';
}///
} //
}////

function A01(k) { //

    switch (k){
        case 'a': console.log('aoi');
            
        optionDisplay.innerHTML =  
        "<div class='options' id='optionA' style='color: grey'  >" + "Go to the tavern ask information" + '</div>' +
        "<p style= 'margin: 3px'>" +"</p>" 
             game.innerHTML += "<p style= 'margin: 15px'></p>"  + 
             "<p>As " + playerObject.name +" walked through the streets of Belle Ville, they couldn't help but feel a sense of despair hanging heavy in the air. It had been weeks since the baron's daughter had gone missing, and still, there were no leads on her whereabouts." +
            "<P> Determined to find some kind of clue, " + playerObject.name +" made their way to the local tavern, hoping to gather any information that might be helpful in the search for the missing girl." +
            "<p> Upon entering the Tavern, " + playerObject.name +" was greeted by the warm glow of candlelight and the sound of laughter and conversation. They made their way to the bar and took a seat, hoping to blend in with the crowd and listen for any mentions of the missing girl." +
            "<p> The bartender, a friendly man with a bushy beard and kind eyes, approached " + playerObject.name +"  and..." + 
            "<p style= 'margin: 15px'>" +"</p>" +
            "<div class='borderHorizontalOne margin10'></div>" +
            "<div id='optionHere2'></div>"

            optionDisplay = document.getElementById('optionHere2');

            optionDisplay.innerHTML +=  "<div class='options' onclick = A01Chat("+'"chatOne"'+") id='optionA' >" + "Start a Chat" + '</div>' +
"<p style= 'margin: 3px'>" +"</p>" 
        break;
        case 'a2' :
        document.getElementById('option3').style = "color: grey"
        checkpoint02 = document.getElementById('checkPoint2')
        checkpoint02.innerHTML =  "<p style= 'margin: 30px'></p>" +
        "<div class='borderHorizontalOne'></div>" +
        "<p>As you sat at the bar, you struck up a conversation with the people around you, asking if they had any information about the missing girl or any ideas about where she might have gone." + 
        "<p style= 'margin: 15px'></p>" +
        "<img src='raw arts/textArt/peapleABar.png' class='borderHorizontal'>" + 
        "<p style= 'margin: 15px'></p>" +
        "<p>You spoke with one of the patrons at the establishment, a middle-aged man seated at one of the tables. He had a thick beard and a gruff voice, and seemed to be deep in thought. You decided to approach him and struck up a conversation." +
        "<p>The man introduced himself as a regular patron at the establishment, and mentioned that he had heard several rumors about the missing girl who had recently disappeared from the town. He told you that some people believe that the girl was taken by the forest spirits, and added a wink to suggest that he did not necessarily believe this theory." +
        "<p>However, the man expressed his belief that the girl might have run off with a secret lover. He mentioned that there had been rumors of a young man who was seen with the girl on several occasions, and that he personally thought it was likely that the two might have eloped together." +
        "<p>As you continued to speak with the patrons at the bar, a young woman with long blonde hair and a kind smile approached you. She introduced herself and listened attentively as you shared the various rumors that you had heard about the missing girl."+
        "<p style= 'margin: 15px'></p>" +
        "<img src='raw arts/textArt/blondeLadyAtBar.png' class='borderHorizontal'>" + 
        "<p style= 'margin: 15px'></p>" +
        "<p>After considering what you had told her, the woman offered a different theory. She believed that it was more likely that the girl had been taken by bandits, citing the recent reports of increased bandit activity in the area." +
        "<p>The woman explained that she had heard stories of bandits preying on travelers and villagers alike, and that it was not uncommon for people to disappear without a trace. She expressed her concern for the safety of the missing girl, and hoped that she would be found soon." +
        "<p>An old man approached you, he listened carefully as you listened to the various rumors about the missing girl." +
        '<p>And the the old man offered a different theory. "Maybe it was them orcs," he said gruffly. '+"I've heard tell of them beasts roaming these parts, and they're known to eat folks alive." +
        "<p>You are not sure if you believe any of these theories, but you are determined to continue searching until searching until you find the missing girl."  

    }
}    

function A01Chat(t) {
    optionDisplay = document.getElementById('optionHere2');
    let testStart = '2000'; // Normal 2000
    let testSwitch = '4000'; // Normal 4000

    switch(t) {
        case 'chatOne': 
    game = document.getElementById('text')

    optionDisplay.innerHTML =  "<div class='options' id='optionA' style='color: grey'>" + "Start a Chat" + '</div>' +
"<p style= 'margin: 3px'>" +"</p>" 

    setTimeout(() => {
        optionDisplay.innerHTML += "<p style= 'margin: 30px'></p>"  +
        "<div class='chatLeft'>" +
        "Hello, pal! Would ye like somethin' tae drink? I've got a fine Northern ale here if ye fancy it!"
        +"</div>" 
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(() => {
             optionDisplay.innerHTML += "<div class='flexNo'><div class='debugRight'></div><div class='chatRight'>" +
             "I apologize for not being here for a drink. I am more interested in finding out about the missing girl."
             +"</div><div>" 
             window.scrollTo(0, document.body.scrollHeight);
             setTimeout(() => {
                optionDisplay.innerHTML += "<div class='chatLeft'>" +
                "Apologies, mate. I'm afraid I don't know anythin' about the disappearance o' Lady Sophie."
                +"</div>" 
                window.scrollTo(0, document.body.scrollHeight);
                setTimeout(() => {
                    optionDisplay.innerHTML += "<div class='chatLeft'>" +
                    "Take a look around ye, lad. There might be someone in this tavern who knows somethin' about the lassie. We've got quite a lively crowd here tonight, it's sure tae be an interesting evening."
                    +"</div>"  
                    window.scrollTo(0, document.body.scrollHeight);
                    setTimeout(() => {
                        optionDisplay.innerHTML += "<div class='chatLeft'>" +
                        "Mebbe Cassie could help ye out. She's a sharp lass, but I've got me doubts about whether ye'll find young Lady Sophie alive at this point. It's been quite a few days now, after all."
                        +"</div>" + "<p style= 'margin: 30px'></p>"  +
                        "<div class='options' onclick = A01("+'"a2"'+") id='option3'>" + "End of Conversation" + '</div>' +
                        "<p style= 'margin: 3px'>" +"</p>" + "<div id= 'checkPoint2'><div>" 
                        window.scrollTo(0, document.body.scrollHeight);
    
                    }, testSwitch)
                }, testSwitch)
            }, testSwitch)
        }, testSwitch)
 }, testStart)
      
    








 
    }
}