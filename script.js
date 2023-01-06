sexMale = true;
let globalChoice = 'warrior';
charaterCreationPart1('mage') 


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
    globalChoice = 'char'
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
    let y = document.getElementById('newGame'); // deletar isso no futuro!
    y.style.display = 'none'; // deletar isso no futuro!
    let a = document.getElementById('partOne');
    let b = document.getElementById('partTwo');
    let c = document.getElementById('imgSex');
    let d = document.getElementById('divNextBtn2');
    b.style.display = 'block';
    a.style.display = 'none';
  
    sexMale == true ? document.getElementById("sexClickMale").classList.add('class-btnActive') + 
    document.getElementById("sexClickFemale").classList.remove('class-btnActive') : 
    document.getElementById("sexClickFemale").classList.add('class-btnActive') + 
    document.getElementById("sexClickMale").classList.remove('class-btnActive');
        

    if(choice == 'barbarian'){
        if(sexMale == true){
            c.innerHTML = barbarian.imgBig;
        }
        else {
            c.innerHTML = barbarian.imgBigFemale;
        }

    }
    else if(choice =='warrior'){
        if(sexMale == true){
            c.innerHTML = warrior.imgBig;
        }
        else {
            c.innerHTML = warrior.imgBigFemale;
        }

    }
    else {
        if(sexMale == true){
            c.innerHTML = mage.imgBig;

        }
        else {
            c.innerHTML = mage.imgBigFemale;

        }
        
    }
    d.innerHTML = '<p  class="margin10 font-XL next-btn" onclick="charaterCreationPart1(' + "'" + 'char'+ "'" + ')">Next</p>'
}

function sexClick(sex) {
    sex == 'male' ? sexMale = true : sexMale = false;
    charaterCreationPart1(globalChoice)

}