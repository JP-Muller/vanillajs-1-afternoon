console.log('Hello World');

let board = []

function play(clickedId){
  let playerSpan = document.getElementById('player')
  let clickedElement = document.getElementById(clickedId)
  if(playerSpan.innerText === 'X'){
      playerSpan.innerText = 'O'
      clickedElement.innerText = 'X'
      board[clickedId] = 'X'
  } else{ playerSpan.innerText = 'X'
          clickedElement.innerText = 'O'
          board[clickedId] = 'O'
}
console.log(board)


let topLeft = board[0]
let topMid = board[1]
let topRight = board[2]
let midLeft = board[3]
let midMid = board[4]
let midRight = board[5]
let botLeft = board[6]
let botMid = board[7]
let botRight = board[8]

if (topLeft !== undefined && topLeft === topMid && topLeft === topRight){
    alert(`${topLeft} is the winner!`)
    return
} if (midLeft !== undefined && midLeft === midMid && midLeft === midRight){
    alert(`${midLeft} is the winner!`)
    return
} if (botLeft !== undefined && botLeft === botMid && botLeft === botRight){
    alert(`${botLeft} is the winner!`)
    return
} if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft){
    alert(`${topLeft} is the winner!`)
    return
} if (topMid !== undefined && topMid === midMid && topMid === botMid){
    alert(`${topMid} is the winner!`)
    return
} if (topRight !== undefined && topRight === midRight && topRight === botRight){
    alert(`${topRight} is the winner!`)
    return
} if (topRight !== undefined && topRight === midMid && topRight === botLeft){
    alert(`${topRight} is the winner!`)
    return
} if (topMid !== undefined && topMid === midMid && topMid === botMid){
    alert(`${topMid} is the winner!`)
    return
} if (topLeft !== undefined && topLeft === midMid && topLeft === botRight){
    alert(`${topLeft} is the winner!`)
    return    
}

let boardFull = true;
for (let i=0;i<8;i++){
    if (board[i] === undefined){
        boardFull = false
    }
} if (boardFull === true){
    alert('No winner!')
}
}