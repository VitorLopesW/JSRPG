function popUpA() {
    let ga = document.getElementById('game'); 
    ga.style.display = 'none'; 
    

}

function popUpB() {
    let ga = document.getElementById('text'); 
    ga.style.display = 'none'; 
    let menu = document.getElementById('menu');
    menu.style.display = 'block'; 
    menu.innerHTML = "<div style='background-color: hsb(47, 47, 47)'>" +
    "<div style='display: flex; justify-content: space-between; '>"+  '<div class="squareinv4" onclick="backMenu()">BACK</div>' + '<div class="squareinv3" id="invItem2"></div>' + '</div>' + 
    
        "<div style='margin: 10px'></div>" +
        "<div style='display: flex; justify-content: space-between; '>"+ '<div class="squareinv4" onclick="equip()">EQUIP</div>' +  '<div class="squareinv3" id="invItem"></div>' +
        "</div>"
        menu.innerHTML += '<div id= "gridMenu" class="grid inventoryGrid"></div>'
        let menuGrid = document.getElementById('gridMenu')
        y = 0
        for(let i=0; i<7; i++) { // loop para criar o menu
        
        
                if (i%3==0){
                    menuGrid.innerHTML +=  '<div class="squareinv" id="Slot'+ y +'" onclick="divInv('+y+')"></div>'
                        y++
                    menuGrid.innerHTML +=  '<div class="squareinv" id="Slot'+ y +'" onclick="divInv('+y+')"></div>'
                        y++
                    menuGrid.innerHTML +=  '<div class="squareinv" id="Slot'+ y +'" onclick="divInv('+y+')"></div>'
                        y++
                }
        }  
        for(let i=0; i<invtest.length; i++) { // loop para criar o menu
        
        slot = document.getElementById('Slot'+i)

        slot.innerHTML = invtest[i][0]
    }  


        

}

function divInv(item) {
    let info =  document.getElementById('invItem')
    let info2 =  document.getElementById('invItem2')

if (invtest[item][3] == 'exist') {
    for(z=0;z<invtest.length;z++){
        document.getElementById("Slot"+z).classList.remove('class-btnActive')}

        document.getElementById("Slot"+item).classList.add('class-btnActive')
        
        info.innerText = invtest[item][2]
        info2.innerText = invtest[item][1]


    }
        else { for(z=0;z<invtest.length;z++){
        document.getElementById("Slot"+z).classList.remove('class-btnActive')
        info.innerText = '';
        info2.innerText = '';

        }}

}


function backMenu() {
    let ga = document.getElementById('text'); 
    ga.style.display = 'block'; 
    let ga1 = document.getElementById('menu'); 
    ga1.style.display = 'none'; 
    

}

function equip() {

x = document.getElementById('invItem2').innerText


    if(x == ""){
        console.log('error')
    }
    else {

for(i=0;i<invtest.length;i++){
    console.log(x)
if(x == globalItemList[i][1]){
    console.log('hello World')

    switch(globalItemList[i][4]){
        case 'armor':
    playerObject['equipped armor'] = globalItemList[i][1]
    console.log(playerObject)
    break;
    }
}



}


    }


}


function popUpC() {
    let ga = document.getElementById('text'); 
    ga.style.display = 'block'; 
    let ga1 = document.getElementById('menu'); 
    ga1.style.visiblity = 'hidden'; 
    

}
