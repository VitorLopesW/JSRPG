function newGame(){
let i = document.getElementById('partOne');
let y = document.getElementById('newGame');
i.style.display = 'block';
y.style.display = 'none';
}


function characterInfo(char) {
    let i = document.getElementById('bigChar')
    switch(char) {
        case 'barbarian':
            classbtnRemove()
            document.getElementById("barbarianBtn").classList.add('class-btnActive');
            i.innerHTML = barbarian.imgBig;
            break;
        case 'warrior':
            classbtnRemove()
            document.getElementById("warriorBtn").classList.add('class-btnActive');
            i.innerHTML = warrior.imgBig;
            break;
        case 'mage':
            classbtnRemove()
            document.getElementById("mageBtn").classList.add('class-btnActive');
            i.innerHTML = mage.imgBig;
            break;
    }


    function classbtnRemove(){
        document.getElementById("barbarianBtn").classList.remove('class-btnActive');
        document.getElementById("warriorBtn").classList.remove('class-btnActive');
        document.getElementById("mageBtn").classList.remove('class-btnActive');
    }
}

