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
let cellArr = Array.from(cells);
// console.log(cellArr[2])
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
    console.log(cellList)
    console.log(row[3])
    for (let i = 0; i < 4; i++)
    {
        if (row[i][0] == row[i][1] && row[i][0] !="") {
            cellArr[i*4].innerText = (Number(row[i][0]) * 2).toString;
            score += Number(row[i][0]) * 2;
            high = Number(row[i][0]) * 2;
            cellArr[(i*4 +1)].innerText = row[i][2];
            cellArr[(i*4 +2)].innerText = row[i][3];
            cellArr[(i*4 +3)].innerText  = "";
        } 
        else if (row[i][0] == "") {
            if (row[i][1] == "" && row[i][2] == "" && row[i][3] != "") {
                cellArr[i*4].innerText = row[i][3];
                cellArr[(i*4 +3)].innerText  = "";
            }
            else if (row[i][1] == "" && row[i][2] != "" && row[i][3] == row[i][2]) {
                cellArr[i*4].innerText = (Number(row[i][2]) * 2).toString;
                score += Number(row[i][2]) * 2;
                high = Number(row[i][2]) * 2;
                cellArr[(i*4 +2)].innerText  = "";
                cellArr[(i*4 +3)].innerText  = "";
            }
            else if (row[i][1] = "" && row[i][2] != "" && row[i][3] != row[i][2]) {
                cellArr[i*4].innerText = row[i][2];
                cellArr[(i*4 +1)].innerText = row[i][3];
                cellArr[(i*4 +2)].innerText  = "";
                cellArr[(i*4 +3)].innerText  = "";
            }
            else if (row[i][1] != "" && row[i][2] == row[i][1]) {
                cellArr[i*4].innerText = (Number(row[i][2]) * 2).toString;
                score += Number(row[i][2]) * 2;
                high = Number(row[i][2]) * 2;
                cellArr[(i*4 +1)].innerText = row[i][3];
                cellArr[(i*4 +2)].innerText  = "";
                cellArr[(i*4 +3)].innerText  = "";
            }
            else if (row[i][1] != "" && row[i][2] != row[i][1] && row[i][3] != row[i][2]) {
                cellArr[i*4].innerText = row[i][1];
                cellArr[(i*4 +1)].innerText = row[i][2];
                cellArr[(i*4 +2)].innerText = row[i][3];
                cellArr[(i*4 +3)].innerText  = "";
            }
            else if (row[i][1] != "" && row[i][2] != row[i][1] && row[i][3] == row[i][2]) {
                cellArr[i*4].innerText = row[i][1];
                cellArr[(i*4 +1)].innerText = (Number(row[i][2]) * 2).toString;
                cellArr[(i*4 +2)].innerText  = "";
                cellArr[(i*4 +3)].innerText  = "";
            }
            else if (row[i][1] != "" && row[i][2] =="" && row[i][3] == row[i][1]) {
                cellArr[i*4].innerText = (Number(row[i][1]) * 2).toString;
                score += Number(row[i][1]) * 2;
                high = Number(row[i][1]) * 2;
                cellArr[(i*4 +1)].innerText  = "";
                cellArr[(i*4 +3)].innerText  = "";
            }
        }
        console.log(cellList)
    }
}

buttonLeft.addEventListener("click", leftClick)

// window.addEventListener("keydown", function (event) {
//     if (event.defaultPrevented) {
//       return; // Do nothing if the event was already processed
//     }
  
//     switch (event.key) {
//       case "Left": // IE/Edge specific value
//       case "ArrowLeft":
//         // Do something for "down arrow" key press.
//         break;
//       default:
//         return; // Quit when this doesn't handle the key event.
//     }
  
//     // Cancel the default action to avoid it being handled twice
//     event.preventDefault();
//   }, true);



