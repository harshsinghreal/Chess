function pawnMove(startId, targetId, width) {
    const startRow = [8, 9, 10, 11, 12, 13, 14, 15]

    if (startRow.includes(startId) &&
        startId + width * 2 === targetId ||
        startId + width === targetId ||
        startId + width - 1 === targetId && document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild ||
        startId + width + 1 === targetId && document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild
    ) {
        console.log("retrn pwn");
        return true;
    }
}


function bishopMove(startId, targetId, width) {
    console.log("i am bishop");
    if (
        //first direction
        startId + width + 1 === targetId ||
        startId + width * 2 + 2 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild ||
        startId + width * 3 + 3 === targetId && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild ||
        startId + width * 4 + 4 === targetId && !document.querySelector(`[square-id="${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild ||
        startId + width * 5 + 5 === targetId && !document.querySelector(`[square-id="${startId + width * 4 + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild ||
        startId + width * 6 + 6 === targetId && !document.querySelector(`[square-id="${startId + width * 5 + 5}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 4 + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild ||
        startId + width * 7 + 7 === targetId && !document.querySelector(`[square-id="${startId + width * 6 + 6}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 5 + 5}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 4 + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild ||


        startId - width - 1 === targetId ||
        startId - width * 2 - 2 === targetId && !document.querySelector(`[square-id="${startId - width - 1}"]`).firstChild ||
        startId - width * 3 - 3 === targetId && !document.querySelector(`[square-id="${startId - width * 2 - 2}"]`).firstChild ||
        startId - width * 4 - 4 === targetId && !document.querySelector(`[square-id="${startId - width * 3 - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 2 - 2}"]`).firstChild ||
        startId - width * 5 - 5 === targetId && !document.querySelector(`[square-id="${startId - width * 4 - 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 3 - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 2 - 2}"]`).firstChild ||
        startId - width * 6 - 6 === targetId && !document.querySelector(`[square-id="${startId - width * 5 - 5}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 4 - 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 3 - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 2 - 2}"]`).firstChild ||
        startId - width * 7 - 7 === targetId && !document.querySelector(`[square-id="${startId - width * 6 - 6}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 5 - 5}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 4 - 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 3 - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 2 - 2}"]`).firstChild ||




        startId - width + 1 === targetId ||
        startId - width * 2 + 2 === targetId && !document.querySelector(`[square-id="${startId - width + 1}"]`).firstChild ||
        startId - width * 3 + 3 === targetId && !document.querySelector(`[square-id="${startId - width * 2 + 2}"]`).firstChild ||
        startId - width * 4 + 4 === targetId && !document.querySelector(`[square-id="${startId - width * 3 + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 2 + 2}"]`).firstChild ||
        startId - width * 5 + 5 === targetId && !document.querySelector(`[square-id="${startId - width * 4 + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 3 + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 2 + 2}"]`).firstChild ||
        startId - width * 6 + 6 === targetId && !document.querySelector(`[square-id="${startId - width * 5 + 5}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 4 + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 3 + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 2 + 2}"]`).firstChild ||
        startId - width * 7 + 7 === targetId && !document.querySelector(`[square-id="${startId - width * 6 + 6}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 5 + 5}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 4 + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 3 + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 2 + 2}"]`).firstChild ||


        startId + width - 1 === targetId ||
        startId + width * 2 - 2 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild ||
        startId + width * 3 - 3 === targetId && !document.querySelector(`[square-id="${startId + width * 2 - 2}"]`).firstChild ||
        startId + width * 4 - 4 === targetId && !document.querySelector(`[square-id="${startId + width * 3 - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 - 2}"]`).firstChild ||
        startId + width * 5 - 5 === targetId && !document.querySelector(`[square-id="${startId + width * 4 - 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3 - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 - 2}"]`).firstChild ||
        startId + width * 6 - 6 === targetId && !document.querySelector(`[square-id="${startId + width * 5 - 5}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 4 - 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3 - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 - 2}"]`).firstChild ||
        startId + width * 7 - 7 === targetId && !document.querySelector(`[square-id="${startId + width * 6 - 6}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 5 - 5}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 4 - 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3 - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 - 2}"]`).firstChild


    ) {
        return true;
    }
}

function knightMove(startId, targetId, width) {
    if (
        startId + width * 2 - 1 === targetId ||
        startId + width * 2 + 1 === targetId ||
        startId + width + 2 === targetId ||
        startId + width - 2 === targetId ||
        startId - width * 2 - 1 === targetId ||
        startId - width * 2 + 1 === targetId ||
        startId - width + 2 === targetId ||
        startId - width - 2 === targetId

    ) {
        return true;
    }
}


function rookMove(startId, targetId, width) {
    if (
        // forward
        startId + width === targetId ||
        startId + width * 2 === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild ||
        startId + width * 3 === targetId && !document.querySelector(`[square-id="${startId + width * 2}"]`).firstChild ||
        startId + width * 4 === targetId && !document.querySelector(`[square-id="${startId + width * 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2}"]`).firstChild ||
        startId + width * 5 === targetId && !document.querySelector(`[square-id="${startId + width * 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2}"]`).firstChild ||
        startId + width * 6 === targetId && !document.querySelector(`[square-id="${startId + width * 5}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2}"]`).firstChild ||
        startId + width * 7 === targetId && !document.querySelector(`[square-id="${startId + width * 6}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 5}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2}"]`).firstChild ||

        //backward
        startId - width === targetId ||
        startId - width * 2 === targetId && !document.querySelector(`[square-id="${startId - width}"]`).firstChild ||
        startId - width * 3 === targetId && !document.querySelector(`[square-id="${startId - width * 2}"]`).firstChild ||
        startId - width * 4 === targetId && !document.querySelector(`[square-id="${startId - width * 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 2}"]`).firstChild ||
        startId - width * 5 === targetId && !document.querySelector(`[square-id="${startId - width * 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 2}"]`).firstChild ||
        startId - width * 6 === targetId && !document.querySelector(`[square-id="${startId - width * 5}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 2}"]`).firstChild ||
        startId - width * 7 === targetId && !document.querySelector(`[square-id="${startId - width * 6}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 5}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - width * 2}"]`).firstChild ||


        //left
        startId + 1 === targetId ||
        startId + 2 === targetId && !document.querySelector(`[square-id="${startId + 1}"]`).firstChild ||
        startId + 3 === targetId && !document.querySelector(`[square-id="${startId + 2}"]`).firstChild ||
        startId + 4 === targetId && !document.querySelector(`[square-id="${startId + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2}"]`).firstChild ||
        startId + 5 === targetId && !document.querySelector(`[square-id="${startId + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2}"]`).firstChild ||
        startId + 6 === targetId && !document.querySelector(`[square-id="${startId + 5}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2}"]`).firstChild ||
        startId + 7 === targetId && !document.querySelector(`[square-id="${startId + 6}"]`).firstChild && !document.querySelector(`[square-id="${startId + 5}"]`).firstChild && !document.querySelector(`[square-id="${startId + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + 2}"]`).firstChild ||

        //right
        startId - 1 === targetId ||
        startId - 2 === targetId && !document.querySelector(`[square-id="${startId - 1}"]`).firstChild ||
        startId - 3 === targetId && !document.querySelector(`[square-id="${startId - 2}"]`).firstChild ||
        startId - 4 === targetId && !document.querySelector(`[square-id="${startId - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2}"]`).firstChild ||
        startId - 5 === targetId && !document.querySelector(`[square-id="${startId - 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2}"]`).firstChild ||
        startId - 6 === targetId && !document.querySelector(`[square-id="${startId - 5}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2}"]`).firstChild ||
        startId - 7 === targetId && !document.querySelector(`[square-id="${startId - 6}"]`).firstChild && !document.querySelector(`[square-id="${startId - 5}"]`).firstChild && !document.querySelector(`[square-id="${startId - 4}"]`).firstChild && !document.querySelector(`[square-id="${startId - 3}"]`).firstChild && !document.querySelector(`[square-id="${startId - 2}"]`).firstChild


    ) {
        return true;
    }
}


function kingtMove(startId, targetId, width) {
    console.log("test");
    if (startId + 1 == targetId ||
        startId - 1 === targetId ||
        startId - width === targetId ||
        startId + width === targetId ||
        startId + width - 1 === targetId ||
        startId + width + 1 === targetId ||
        startId + width - 1 === targetId ||
        startId - width - 1 === targetId ||
        startId - width + 1 === targetId

    ) {
        return true;
    }
}

