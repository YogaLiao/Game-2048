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
// console.log(cellArr[2])
let scoreText = document.querySelector(".score")
let score = 0;

let newButton = document.querySelector(".new");
let helpButton = document.querySelector(".help");
let playAgainButton = document.querySelector(".play-again");
let backButton = document.querySelector(".back")

let board = document.querySelector(".board")
let gameover = document.querySelector(".gameover");
let gameoverText = document.querySelector(".gameover-text");
let help = document.querySelector(".help-board")



let rowCombo = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]]
let colCombo = [[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]]
let adjCombo = [[0,1],[1,2],[2,3],[4,5],[5,6],[6,7],[8,9],[9,10],[10,11],[12,13],[13,14],[14,15],[0,4],[4,8],[8,12],[1,5],[5,9],
                [9,13],[2,6],[6,10],[10,14],[3,7],[7,11],[11,15]]
let indexList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let valueList = [2,4];

//**<---------------------------------------
//Initially we have two cells with number 2
function startGame() {
let starter1 = Math.ceil(Math.random()*15)
let starter2 = Math.ceil(Math.random()*15)

if (starter1 == starter2) {
    starter2 = Math.ceil(Math.random()*15)
}
cells[starter1].innerText = "2";
cells[starter2].innerText = "2";

changeColor();
}
let high = 2;
startGame();


//Start to create functions
//Each move will generate a new number

function generateNum() {
    let cellArr = Array.from(cells);
    let cellList = Array.from(cells).map(element => element.innerText);
    let emptyArr = []
    
    for (i=0;i<=15;i++) {
        if (cellArr[i].innerText == "") {
            emptyArr.push(i)
        }
    }
    console.log(emptyArr)
    let randomIndex = Math.floor(Math.random()*emptyArr.length);
    let randomNum = emptyArr[randomIndex];
    console.log(randomIndex)
    console.log(randomNum)
    let randomValue = valueList[Math.ceil(Math.random()*2)];
    console.log(randomValue)
    cellArr[randomNum].innerText = Math.min(high,randomValue).toString()
    
}

//Left

function goLeft() {
    let cellArr = Array.from(cells);
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
    let cellArr = Array.from(cells);
    let cellList = Array.from(cells).map(element => element.innerText)
    const row = rowCombo.map(element => element.map(x => cellList[x]))
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (row[i][j] == row[i][j+1] && row[i][j] != "") {
                cellArr[4*i+j].innerText = (Number(cellArr[4*i+j].innerText) * 2).toString();
                row[i][j+1] = "";
                cellArr[4*i+j+1].innerText = "";
                high = Math.max(high,(Number(cellArr[4*i+j].innerText)));
                score += Number(cellArr[4*i+j].innerText);
                scoreText.innerText = score.toString().padStart(7,"0");
                console.log(score);
                console.log(high)
            }
        }
    }
}

//Right
function goRight() {
    let cellArr = Array.from(cells);
    let cellList = Array.from(cells).map(element => element.innerText)
    const row = rowCombo.map(element => element.map(x => cellList[x]))
    console.log(row)
    console.log(cellList)
    for (let i = 0; i < 4; i++){
        let filterArr = row[i].filter(num => num).reverse()
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
    let cellArr = Array.from(cells);
    let cellList = Array.from(cells).map(element => element.innerText)
    const row = rowCombo.map(element => element.map(x => cellList[x]))
    for (let i = 0; i < 4; i++) {
        for (let j = 3; j > 0; j--) {
            if (row[i][j] == row[i][j-1] && row[i][j] != "") {
                cellArr[4*i+j].innerText = (Number(cellArr[4*i+j].innerText) * 2).toString();
                cellArr[4*i+j-1].innerText = "";
                row[i][j-1] = "";
                high = Math.max(high,(Number(cellArr[4*i+j].innerText)));
                score += Number(cellArr[4*i+j].innerText);
                scoreText.innerText = score.toString().padStart(7,"0");
                console.log(score);
                console.log(high)
            }
        }
    }
}

//Up
function goUp() {
    let cellArr = Array.from(cells);
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
    let cellArr = Array.from(cells);
    let cellList = Array.from(cells).map(element => element.innerText);
    const column = colCombo.map(element => element.map(x => cellList[x]))
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (column[i][j] == column[i][j+1] && column[i][j] != "") {
                cellArr[4*j+i].innerText = (Number(cellArr[4*j+i].innerText) * 2).toString();
                cellArr[4*(j+1)+i].innerText = "";
                column[i][j+1] = "";
                high = Math.max(high,(Number(cellArr[4*j+i].innerText)));
                score += Number(cellArr[4*j+i].innerText);
                scoreText.innerText = score.toString().padStart(7,"0");
                console.log(score);
                console.log(high)
            }
        }
    }
}

//Down
//Up
function goDown() {
    let cellArr = Array.from(cells);
    let cellList = Array.from(cells).map(element => element.innerText)
    console.log(cellArr);
    const column = colCombo.map(element => element.map(x => cellList[x]))
    console.log(column)
    console.log(cellList)
    for (let i = 0; i < 4; i++){
        let filterArr = column[i].filter(num => num).reverse();
        console.log(filterArr)
        if (filterArr.length != 4) {
        for (let j = 0; j < filterArr.length;j++) {
            cellArr[(4*(3-j)+i)].innerText = filterArr[j]
        }
        for (let k = 0; k < 4 - filterArr.length;  k++) {
            cellArr[4*k+i].innerText = "";
        }}
    }         
}

function combineDown() {
    let cellArr = Array.from(cells);
    let cellList = Array.from(cells).map(element => element.innerText)
    const column = colCombo.map(element => element.map(x => cellList[x]))
    for (let i = 0; i < 4; i++) {
        for (let j = 3; j > 0; j--) {
            if (column[i][j] == column[i][j-1] && column[i][j] != "") {
                cellArr[4*j+i].innerText = (Number(cellArr[4*j+i].innerText) * 2).toString();
                cellArr[4*(j-1)+i].innerText = "";
                column[i][j-1] = "";
                high = Math.max(high,(Number(cellArr[4*j+i].innerText)));
                score += Number(cellArr[4*j+i].innerText);
                scoreText.innerText = score.toString().padStart(7,"0");
                console.log(score);
                console.log(high)
            }
        }
    }
}

//Create a function to restart the game anytime

function newGame() {
    board.style.display = "flex";
    gameover.style.display = "none";
    score = 0;
    scoreText.innerText = "0000000";
    high = 2;
    let cellArr = Array.from(cells);
    console.log(cellArr);
    cellArr.forEach(element => {
        element.innerText = "";
})
    startGame();
}
//Add a function to link these functions with keyboard's arrows

function control(e) {
    e.preventDefault();
    if(e.keyCode === 37) {
      clickLeft()
    } else if (e.keyCode === 38) {
      clickUp()
    } else if (e.keyCode === 39) {
      clickRight()
    } else if (e.keyCode === 40) {
      clickDown()
    }
}

function clickLeft() {
    goLeft();
    combineLeft();
    goLeft();
    generateNum();
    changeColor();
    checkWin();
    checkLose()
}

function clickRight() {
    goRight();
    combineRight();
    goRight();
    generateNum();
    changeColor();
    checkWin();
    checkLose()
}

function clickUp() {
    goUp();
    combineUp();
    goUp();
    generateNum();
    changeColor();
    checkWin();
    checkLose()
}

function clickDown() {
    goDown();
    combineDown();
    goDown();
    generateNum();
    changeColor();
    checkWin();
    checkLose()
}

function checkWin() {
    if (high == 2048) {
        setTimeout(function() {
        board.style.display = "none";
        gameover.style.display = "flex";
        gameoverText.innerText = "Congratulations! You Win!"},300
        )}
}

function checkLose() {
    let cellList = Array.from(cells).map(element => element.innerText)
    const adjacent = adjCombo.map(element => element.map(x => cellList[x]));
    console.log(adjacent);
    let filterArr = cellList.filter(num => num);
    let count = 0;
    console.log(filterArr)
    if (filterArr.length == 16) {
        for (i=0;i<24;i++) {
            if (adjacent[i][0] == adjacent[i][1]) {
                count ++;
            }
        }
        if (count == 0) {
            setTimeout(function() {
                board.style.display = "none";
                gameover.style.display = "flex";
                gameoverText.innerText = "Let's try again!"},1000
                )
        }
    }
}


function changeColor() {
    let cellArr = Array.from(cells);
    cellArr.forEach(x => {
        if (x.innerText == "") {
            x.style.background = "#ffef9f";
            x.style.fontSize = "50px";
        }
        else if (x.innerText == "2") {
            x.style.background = "#ffea00";
            x.style.fontSize = "50px";
        }
        else if (x.innerText == "4") {
            x.style.background = "#ffb600";
            x.style.fontSize = "50px";
        }
        else if (x.innerText == "8") {
            x.style.background = "#ffaa00";
            x.style.fontSize = "50px";
        }
        else if (x.innerText == "16") {
            x.style.background = "#ff9e00";
            x.style.fontSize = "50px";
        }
        else if (x.innerText == "32") {
            x.style.background = "#ff9100";
            x.style.fontSize = "50px";
        }
        else if (x.innerText == "64") {
            x.style.background = "#ff8500";
            x.style.fontSize = "50px";
        }
        else if (x.innerText == "128") {
            x.style.background = "#ff7900";
            x.style.fontSize = "50px";
        }
        else if (x.innerText == "256") {
            x.style.background = "#ff6d00";
            x.style.fontSize = "50px";
        }
        else if (x.innerText == "512") {
            x.style.background = "#ff6000";
            x.style.fontSize = "50px";
        }
        else if (x.innerText == "1024") {
            x.style.background = "#ff5400";
            x.style.fontSize = "40px";
        }
        else if (x.innerText == "2048") {
            x.style.background = "#ff4800";
            x.style.fontSize = "40px";
        }

    })
}
//Add event handler

document.addEventListener('keyup', control)

newButton.addEventListener("click", event=>{
    event.preventDefault();
    newGame();
})
playAgainButton.addEventListener("click", event=>{
    event.preventDefault();
    newGame();
})

helpButton.addEventListener("click", event=>{
    event.preventDefault();
    board.style.display = "none";
    help.style.display = "flex";
})
backButton.addEventListener("click", event=>{
    event.preventDefault();
    help.style.display = "none";
    board.style.display = "flex";
})








