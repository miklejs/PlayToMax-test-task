/* eslint-disable */
const gameTable = document.getElementsByTagName("table")[0];
console.log(gameTable);
const tdCollection = document.getElementsByTagName("td")
console.log(tdCollection);

let i = 0;
for (i = 0; i < tdCollection.length; i++) {
    tdCollection[i].addEventListener('click', function () {
        let y = this.parentElement.rowIndex;
        let x = this.cellIndex;
        let elementClass = gameTable.rows[y].cells[x].getAttribute("class");
        checkBoxes(x, y, elementClass);
    })
  
}

function checkBoxes(x, y, elementClass) {
    gameTable.rows[y].cells[x].innerHTML = '';

    let coords = [
        {x: x-1, y: y},
        {x: x+1, y: y},
        {x: x, y: y+1},
        {x: x, y: y-1}
    ];

    coords.forEach(element => {
        let currentClass;
        try {
            let innerHTML = gameTable.rows[element.y].cells[element.x].innerHTML;
            currentClass = gameTable.rows[element.y].cells[element.x].getAttribute("class");

            if (currentClass === elementClass && innerHTML !== '') {
                checkBoxes(element.x, element.y, elementClass);
            }
        } catch (err) {
            //console.log('error');
        }
    
    });
}; 


document.getElementById("reset").addEventListener('click', resetButton);

function resetButton () {
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

          let cardsTable = document.getElementsByTagName("td");    
          for (i = 0; i < cardsTable.length; i++) {
              cardsTable[i].classList.remove('class');
              
              if (randomInteger(1, 4)) {
                  cardsTable[i].setAttribute("class", "clubs");
                  cardsTable[i].innerHTML = "&#9827;";
              }
              if (randomInteger(1, 4) == 2) {
                  cardsTable[i].setAttribute("class", "peaks");
                  cardsTable[i].innerHTML = "&#9824;";
              }     
              if (randomInteger(1, 4) == 3) {
                  cardsTable[i].setAttribute("class", "diamonds");
                  cardsTable[i].innerHTML = "&#9826;";
              }
              
              if (randomInteger(1, 4) == 4) {
                  cardsTable[i].setAttribute("class", "hearts");
                  cardsTable[i].innerHTML = "&#9825;";
              }
              
              
                  
                             
          }
            
        }                
                           
        
            
           
