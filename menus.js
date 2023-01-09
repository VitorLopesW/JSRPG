function popUpA() {
    let ga = document.getElementById('game'); 
    ga.style.display = 'none'; 
    

}

function popUpB() {
    let ga = document.getElementById('text'); 
    ga.style.display = 'none'; 
    let menu = document.getElementById('menu');
     
    menu.innerHTML = "<div style='background-color: hsb(47, 47, 47)'>" +
        "<div style='display: flex; justify-content: space-between; '>"+
            '<div class="squareinv2">back</div>' +  '<div class="squareinv3">back</div>' + 
        "</div>"
        menu.innerHTML += '<div id= "gridMenu" class="grid inventoryGrid"></div>'
        let menuGrid = document.getElementById('gridMenu')
        y = 0
        for(let i=0; i<7; i++) { // loop para criar o menu
        
        
                if (i%3==0){
                    menuGrid.innerHTML +=  '<div class="squareinv" id="Slot'+ y +'"></div>'
                        y++
                    menuGrid.innerHTML +=  '<div class="squareinv" id="Slot'+ y +'"></div>'
                        y++
                    menuGrid.innerHTML +=  '<div class="squareinv" id="Slot'+ y +'"></div>'
                        y++
                }
        }  
        for(let i=0; i<invtest.length; i++) { // loop para criar o menu
        
        slot = document.getElementById('Slot'+i)

        slot.innerHTML = invtest[i][0]
    }  


        

}

function popUpC() {
    let ga = document.getElementById('text'); 
    ga.style.display = 'block'; 
    

}