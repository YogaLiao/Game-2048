let cell1 = document.getElementById("cell1")
let cell2 = document.getElementById("cell2")
let cell3 = document.getElementById("cell3")
let cell4 = document.getElementById("cell4")
let cell5 = document.getElementById("cell5")
let cell6 = document.getElementById("cell6")
let cell7 = document.getElementById("cell7")
let cell8 = document.getElementById("cell8")
let cell9 = document.getElementById("cell9")
let cell10 = document.getElementById("cell10")
let cell11 = document.getElementById("cell11")
let cell12 = document.getElementById("cell12")
let cell13 = document.getElementById("cell13")
let cell14 = document.getElementById("cell14")
let cell15 = document.getElementById("cell15")
let cell16 = document.getElementById("cell16")
let cells = document.querySelectorAll(".cell")
console.log(cells)
// console.log(cellList)

let scoreText = document.querySelector(".score")
let score = 0;

let buttonUp = document.getElementById("up")
let buttonDown = document.getElementById("down")
let buttonLeft = document.getElementById("left")
let buttonRight = document.getElementById("right")

let rowCombo = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]]
let colCombo = [[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]]
let indexList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let valueList = [2,4,8,16,32,64,128,256,511,1024,2048];
let randomValue = valueList[Math.ceil(Math.random()*10)]

//**<---------------------------------------
//Initially we have two cells with number 2
let starter1 = Math.ceil(Math.random()*15)
let starter2 = Math.ceil(Math.random()*15)

if (starter1 == starter2) {
    starter2 = Math.ceil(Math.random()*15)
}
cells[starter1].innerText = "2";
cells[starter2].innerText = "2";

cells[starter1].classList.add("style2");
cells[starter2].classList.add("style2");

let high = 2;

//Start to create functions
//Left

function leftClick(event) {
    event.preventDefault();
    let cellList = Array.from(cells).map(element => element.innerText)
    const row = rowCombo.map(element => element.map(x => cellList[x]))
    console.log(row)
    row.forEach(element => {
        if (element[0] == element[1] && element[0] !="") {
            element[0].innerText = (Number(element[0].innerText) * 2).toString;
            score += Number(element[0].innerText) * 2;
            high = Number(element[0].innerText) * 2;
            element[1] = element[2];
            element[2] = element[3];
        } 
        else if (element[0] == "") {
            
        }
    })
}

buttonLeft.addEventListener("click", leftClick)

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "Left": // IE/Edge specific value
      case "ArrowLeft":
        // Do something for "down arrow" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);



