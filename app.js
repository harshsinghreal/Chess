//import { pawnMove, kingtMove, knightMove, bishopMove, rookMove } from './moves.js'
// you can use this import also add export before functions on moves.js
const gameoBard = document.querySelector('#gameboard')
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 8
let playerGo = 'black'
playerDisplay.textContent = 'black'

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook


]
function createBoard() {
    startPieces.forEach((startPiece, i) => {

        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece;

        square.firstChild && square.firstChild.setAttribute('draggable', true)

        square.setAttribute('square-id', i)
        //  square.classList.add('beige')
        const row = Math.floor((63 - i) / 8) + 1;
        if (row % 2 == 0) square.classList.add(i % 2 == 0 ? "yellow" : "green")
        else square.classList.add(i % 2 == 0 ? "green" : "yellow")

        if (i <= 15) {
            square.firstChild.firstChild.classList.add('black')
        }
        if (i >= 48) {
            square.firstChild.firstChild.classList.add('white')
        }
        gameoBard.append(square)
    })
}

createBoard()


const allSquares = document.querySelectorAll('#gameboard .square')


allSquares.forEach((square) => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragover', dragOver);
    square.addEventListener('drop', dragDrop);

})

let startPosId
let draggedElement

function dragStart(e) {
    //console.log("dragstart");
    startPosId = e.target.parentNode.getAttribute('square-id');
    draggedElement = e.target
}

function dragOver(e) {
    //  console.log("dragover");
    e.preventDefault();
}

function dragDrop(e) {

    infoDisplay.textContent = ""
    e.stopPropagation()
    const correctGo = draggedElement.firstChild.classList.contains(playerGo)
    const taken = e.target.classList.contains('piece')
    const opponentGO = playerGo === 'black' ? 'white' : 'black'
    const takenByOpponent = e.target.firstChild?.classList.contains(opponentGO)
    const valid = checkIfValid(e.target)

    console.log("valid -> " + valid);
    if (correctGo) {
        if (takenByOpponent && valid) {
            e.target.parentNode.append(draggedElement)
            e.target.remove();
            checkForWin()
            changePlayer()
            return
        }

        if (taken && !takenByOpponent) {
            infoDisplay.textContent = "you cant go here"
            return
        }

        if (valid) {
            e.target.append(draggedElement)
            checkForWin()
            changePlayer()
            return
        }
    }





    // e.target.append(draggedElement)

    //   e.target.parentNode.append(draggedElement)
    //   e.target.remove();

    // changePlayer()

}



function checkIfValid(target) {
    const targetId = Number(target.getAttribute('square-id')) || Number(target.parentNode.getAttribute('square-id'))
    const startId = Number(startPosId);
    const piece = draggedElement.id
    console.log(startId);

    switch (piece) {
        case 'pawn':
            console.log("this is pawn");
            if (pawnMove(startId, targetId, width)) return true; break;

        case 'knight':
            if (knightMove(startId, targetId, width)) return true; break;

        case 'bishop':
            if (bishopMove(startId, targetId, width)) return true; break;

        case 'rook':
            if (rookMove(startId, targetId, width)) return true; break;

        case 'queen':
            if (rookMove(startId, targetId, width) || bishopMove(startId, targetId, width)) return true; break;

        case 'king':
            if (kingtMove(startId, targetId, width)) return true; break;
    }
}






function changePlayer() {
    if (playerGo == 'black') {
        reverseIds()
        playerGo = 'white'
        playerDisplay.textContent = 'white'
    } else {
        revertIds()
        playerGo = 'black'
        playerDisplay.textContent = 'black'
    }
}


function reverseIds() {
    const allSquares = document.querySelectorAll(".square")
    allSquares.forEach((square, i) => {

        square.setAttribute('square-id', (width * width - 1) - i)
    })

}


function revertIds() {
    const allSquares = document.querySelectorAll(".square")

    allSquares.forEach((square, i) => {

        square.setAttribute('square-id', i)
    })
}


function checkForWin() {
    const kings = Array.from(document.querySelectorAll('#king'));
    console.log(kings);
    if (!kings.some(king => king.firstChild.classList.contains('white'))) {
        infoDisplay.innerHTML = "black wins"

        const allSquares = document.querySelectorAll('.square');
        allSquares.forEach((square) => {
            square.firstChild?.setAttribute('draggable', false)
        })
    }

    if (!kings.some(king => king.firstChild.classList.contains('black'))) {
        infoDisplay.innerHTML = "white wins"

        const allSquares = document.querySelectorAll('.square');
        allSquares.forEach((square) => {
            square.firstChild?.setAttribute('draggable', false)
        })
    }
}