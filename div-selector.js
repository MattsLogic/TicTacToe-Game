const tile0 = document.getElementById("tile-1");
const tile1 = document.getElementById("tile-2");
const tile2 = document.getElementById("tile-3");
const tile3 = document.getElementById("tile-4");
const tile4 = document.getElementById("tile-5");
const tile5 = document.getElementById("tile-6");
const tile6 = document.getElementById("tile-7");
const tile7 = document.getElementById("tile-8");
const tile8 = document.getElementById("tile-9");
const startButton = document.getElementById("game-start-button");

let count = 1;
let playerXTurn = true;
const gameTiles = [tile0, tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8];
let currentBoardValues = [null, null, null, null, null, null, null, null, null];

function playSoloGame() {
    count = 1;
    playerXTurn = true;
    gameTiles.forEach((element, index) => {element.addEventListener("click", boxHtml)});
    gameTiles.forEach((element) => {element.innerHTML = ""});
    currentBoardValues.fill(null);
    console.log("The game has started and it is X's turn.");
}

// whosTurnIs and tTTHtml are designed to work together so call both in that order
function whosTurnIs() {
    if (count % 2 === 0 && count < 10) {
        playerXTurn = false;
    } else if (count % 2 === 1 && count < 10) {
        playerXTurn = true;
    } else { 
        playerXTurn = null;
    }
}

function tTTHtml(event) {
    const selectedTile = event.target;
    const tileIndex = gameTiles.indexOf(selectedTile);

    if (playerXTurn === true) {
        selectedTile.innerHTML = "X";
        currentBoardValues[tileIndex] = true;
        count += 1;
        console.log("The count is now " + count);
        console.log("selected div's index is "+ tileIndex);
        console.log(currentBoardValues);
    }
    else if (playerXTurn === false) {
        selectedTile.innerHTML = "O";
        currentBoardValues[tileIndex] = false;
        count += 1;
        console.log("The count is now " + count);
        console.log("selected div's index is "+ tileIndex);
        console.log(currentBoardValues);
    } else {
        gameOver();
    }
}

function boxHtml() {
    whosTurnIs();
    tTTHtml(event);
    checkForWin();
}

// conditions pass 2 parameters: boolean = who won / number = how won
// 1 = horizontal top win / 2 = horizontal center win / and so on...
function checkForWin() {
    if (currentBoardValues[0] === true && currentBoardValues[1] === true && currentBoardValues[2] === true) {
        gameOver();
        // topHorizontalWin(true);
        win(true, 1);
    } else if (currentBoardValues[0] === false && currentBoardValues[1] === false && currentBoardValues[2] === false) {
        gameOver();
        // topHorizontalWin(false);
        win(false, 1);
    } else if (currentBoardValues[3] === true && currentBoardValues[4] === true && currentBoardValues[5] === true) {
        gameOver();
        midHorizontalWin(true);
    } else if (currentBoardValues[3] === false && currentBoardValues[4] === false && currentBoardValues[5] === false) {
        gameOver();
        midHorizontalWin(false);
    } else if (currentBoardValues[6] === true && currentBoardValues[7] === true && currentBoardValues[8] === true) {
        gameOver();
        botHorizontalWin(true);
    } else if (currentBoardValues[6] === false && currentBoardValues[7] === false && currentBoardValues[8] === false) {
        gameOver();
        botHorizontalWin(false);
    } else if (currentBoardValues[0] === true && currentBoardValues[3] === true && currentBoardValues[6] === true) {
        gameOver();
        leftVerticalWin(true);
    } else if (currentBoardValues[0] === false && currentBoardValues[3] === false && currentBoardValues[6] === false) {
        gameOver();
        leftVerticalWin(false);
    } else if (currentBoardValues[1] === true && currentBoardValues[4] === true && currentBoardValues[7] === true) {
        gameOver();
        centVerticalWin(true);
    } else if (currentBoardValues[1] === false && currentBoardValues[4] === false && currentBoardValues[7] === false) {
        gameOver();
        centVerticalWin(false);
    } else if (currentBoardValues[2] === true && currentBoardValues[5] === true && currentBoardValues[8] === true) {
        gameOver();
        rightVerticalWin(true);
    } else if (currentBoardValues[2] === false && currentBoardValues[5] === false && currentBoardValues[8] === false) {
        gameOver();
        rightVerticalWin(false);
    } else if (currentBoardValues[0] === true && currentBoardValues[4] === true && currentBoardValues[8] === true) {
        gameOver();
        horizontal1Win(true);
    } else if (currentBoardValues[0] === false && currentBoardValues[4] === false && currentBoardValues[8] === false) {
        gameOver();
        horizontal1Win(false);
    } else if (currentBoardValues[2] === true && currentBoardValues[4] === true && currentBoardValues[6] === true) {
        gameOver();
        horizontal2Win(true);
    } else if (currentBoardValues[2] === false && currentBoardValues[4] === false && currentBoardValues[6] === false) {
        gameOver();
        horizontal2Win(false);
    }
}
// This needs 51 lines of code including everything
function win(boolean, winType){
    if (boolean === true && winType === 1) {
        // display HorizontalTopWin
        console.log("Congrats player X you win!");
    } else if (boolean === false && winType === 1) {
        // display HorizontalTopWin
        console.log("Congrats player O you win!");
    }
}
// THIS FUNCTION IS ANOTHER EXAMPLE OF HOW TO CHECK WIN GAME I THINK THIS ONE AND THE ONE ABOVE IT ARE
// EQUAL IN EFFICIENCY...WHICH SUCKS BECAUSE IM TRYING TO MAKE THEM MORE EFFICIENT...
// This needs 64 lines of code including everything
// function leftVerticalWin(boolean) {
//     // display left vertical win
//     if (boolean === true) {
//         console.log("congrats player X you win the game!")
//     } else if (boolean === false) {
//         console.log("congrats player O you win the game!")
//     }
// }

function gameOver() {
    console.log("game over");
    playerXTurn = null;
    gameTiles.forEach((element) => {element.removeEventListener("click", boxHtml)})
}


startButton.addEventListener("click", playSoloGame);