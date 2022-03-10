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
//Each move will generate a new number

function generateNum() {
    let randomNum = Math.ceil(Math.random()*15);
    if (cellArr[randomNum].innerText == "") {
        let randomValue = valueList[Math.ceil(Math.random()*10)];
        // console.log(randomValue)
        cellArr[randomNum].innerText = Math.min(high,randomValue,64).toString()
    }
    else {
        randomNum = Math.ceil(Math.random()*15);
    }
}

//Left

function goLeft() {
    let cellList = Array.from(cells).map(element => element.innerText)
    const row = rowCombo.map(element => element.map(x => cellList[x]))
    console.log(row)
    console.log(cellList)
    console.log(row[3])
    for (let i = 0; i < 4; i++){
        let filterArr = row[i].filter(num => num)
        console.log(filterArr)
        for (let j = 0; j < filterArr.length;j++) {
            cellArr[(4*i+j)].innerText = filterArr[j]
        }
        for (let k = filterArr.length; k < 4; k++) {
            cellArr[4*i+k].innerText = ""
        }
    }         
}

function combineLeft() {
    let cellList = Array.from(cells).map(element => element.innerText)
    const row = rowCombo.map(element => element.map(x => cellList[x]))
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (row[i][j] == row[i][j+1] && row[i][j] != "") {
                cellArr[4*i+j].innerText = (Number(cellArr[4*i+j].innerText) * 2).toString();
                cellArr[4*i+j+1].innerText = "";
                high = Math.max(high,(Number(cellArr[4*i+j].innerText)));
                score += Number(cellArr[4*i+j].innerText);
                scoreText.innerText = score.toString().padStart(5,"0");
                console.log(score);
                console.log(high)
            }
        }
    }
}

//Right
function goRight() {
    let cellList = Array.from(cells).map(element => element.innerText)
    const row = rowCombo.map(element => element.map(x => cellList[x]))
    console.log(row)
    console.log(cellList)
    for (let i = 0; i < 4; i++){
        let filterArr = row[i].filter(num => num)
        console.log(filterArr)
        for (let j = filterArr.length - 1; j >= 0;j--) {
            cellArr[(4*i+3-j)].innerText = filterArr[j]
        }
        for (let k = 0; k < 4 - filterArr.length; k++) {
            cellArr[4*i+k].innerText = ""
        }
    }         
}

function combineRight() {
    let cellList = Array.from(cells).map(element => element.innerText)
    const row = rowCombo.map(element => element.map(x => cellList[x]))
    for (let i = 0; i < 4; i++) {
        for (let j = 3; j > 0; j--) {
            if (row[i][j] == row[i][j-1] && row[i][j] != "") {
                cellArr[4*i+j].innerText = (Number(cellArr[4*i+j].innerText) * 2).toString();
                cellArr[4*i+j-1].innerText = "";
                high = Math.max(high,(Number(cellArr[4*i+j].innerText)));
                score += Number(cellArr[4*i+j].innerText);
                scoreText.innerText = score.toString().padStart(5,"0");
                console.log(score);
                console.log(high)
            }
        }
    }
}

//Up
function goUp() {
    let cellList = Array.from(cells).map(element => element.innerText)
    const column = colCombo.map(element => element.map(x => cellList[x]))
    console.log(column)
    console.log(cellList)
    for (let i = 0; i < 4; i++){
        let filterArr = column[i].filter(num => num)
        console.log(filterArr)
        for (let j = 0; j < filterArr.length;j++) {
            cellArr[(4*j+i)].innerText = filterArr[j]
        }
        for (let k = filterArr.length; k < 4; k++) {
            cellArr[4*k+i].innerText = ""
        }
    }         
}

function combineUp() {
    let cellList = Array.from(cells).map(element => element.innerText)
    const column = colCombo.map(element => element.map(x => cellList[x]))
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (column[i][j] == column[i][j+1] && column[i][j] != "") {
                cellArr[4*j+i].innerText = (Number(cellArr[4*j+i].innerText) * 2).toString();
                cellArr[4*(j+1)+i].innerText = "";
                high = Math.max(high,(Number(cellArr[4*j+i].innerText)));
                score += Number(cellArr[4*j+i].innerText);
                scoreText.innerText = score.toString().padStart(5,"0");
                console.log(score);
                console.log(high)
            }
        }
    }
}

//Down
//Up
function goDown() {
    let cellList = Array.from(cells).map(element => element.innerText)
    const column = colCombo.map(element => element.map(x => cellList[x]))
    console.log(column)
    console.log(cellList)
    for (let i = 0; i < 4; i++){
        let filterArr = column[i].filter(num => num)
        console.log(filterArr)
        for (let j = 0; j < filterArr.length;j++) {
            cellArr[(4*(3-j)+i)].innerText = filterArr[j]
        }
        for (let k = 0; k < filterArr.length;  k++) {
            cellArr[4*k+i].innerText = ""
        }
    }         
}

function combineDown() {
    let cellList = Array.from(cells).map(element => element.innerText)
    const column = colCombo.map(element => element.map(x => cellList[x]))
    for (let i = 0; i < 4; i++) {
        for (let j = 3; j > 0; j--) {
            if (column[i][j] == column[i][j-1] && column[i][j] != "") {
                cellArr[4*j+i].innerText = (Number(cellArr[4*j+i].innerText) * 2).toString();
                cellArr[4*(j-1)+i].innerText = "";
                high = Math.max(high,(Number(cellArr[4*j+i].innerText)));
                score += Number(cellArr[4*j+i].innerText);
                scoreText.innerText = score.toString().padStart(5,"0");
                console.log(score);
                console.log(high)
            }
        }
    }
}

//Add event handler
buttonLeft.addEventListener("click", (event) => {
    event.preventDefault();
    goLeft();
    combineLeft();
    goLeft();
    generateNum();
})
buttonRight.addEventListener("click", (event) => {
    event.preventDefault();
    goRight();
    combineRight();
    goRight();
    generateNum()
})
buttonUp.addEventListener("click", (event) => {
    event.preventDefault();
    goUp();
    combineUp();
    goUp();
    generateNum()
})
buttonDown.addEventListener("click", (event) => {
    event.preventDefault();
    goDown();
    combineDown();
    goDown();
    generateNum()
})





