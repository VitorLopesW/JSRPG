sexMale = true;
let globalChoice = '';
charaterCreationPart2('mage', 'female')


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
    let newGame = document.getElementById('newGame'); //deletar depois :D
    newGame.style.display = 'none'; //deletar depois :D
    let partThree = document.getElementById('partThree'); //deletar depois :D
    partThree.style.display = 'block'; //deletar depois :D
    playerObject['class'] = choice; 
    playerObject['sex'] = gender; 
    debugStats()
    console.log(playerObject)
    statschange()

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

function sexClick(sex) {
    sex == 'male' ? sexMale = true : sexMale = false;
    charaterCreationPart1(globalChoice)

}