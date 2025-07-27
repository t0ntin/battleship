import { Ship } from "./ship";


// export const myPage = () => {
//   const playerBoard = document.querySelector('.player1-board')
//   const computerBoard = document.querySelector('.computer-board')
//   const computerBoardEls = document.querySelectorAll('.computer-board .box');
//   const player1BoardEls = document.querySelectorAll('.player1-board .box');
//   const shipContainer = document.querySelector('.ship-container')
//   const randomizeEl = document.querySelector('.randomize-button')
//   const carrierEl = document.querySelector('.carrier');
//   const battleshipEl = document.querySelector('.battleship');
//   const cruiserEl = document.querySelector('.cruiser');
//   const submarineEl = document.querySelector('.submarine');
//   const destroyerEl = document.querySelector('.destroyer');

//   return {playerBoard, computerBoard,computerBoardEls, player1BoardEls, shipContainer, randomizeEl, carrierEl, battleshipEl, cruiserEl, submarineEl, destroyerEl}
// }


// export const page = myPage();


export function makeElement(elementTag, className, appendToEl, textInside) {
  const element = document.createElement(elementTag);
  element.classList.add(className);
  if (appendToEl) {
    appendToEl.append(element);
  }
  if (textInside) {
    element.innerText = textInside;
  }
  return element;
}

export const drawPlayer1BoardInDOM = (player1, player1Board) => {
  player1Board.innerHTML = ''; // clear before redrawing
  // row => Go to the (first) array.
  // rowindex => get the index "of the array" (the first row, the second row, etc)
  // cell => go to the (first) row.
  // colindex => get the (first) item in that position. 
  player1.gameboard.board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const element = makeElement('div', 'box');
      element.dataset.coordinates = `${rowIndex},${colIndex}`;
      element.dataset.row = rowIndex;
      element.dataset.col = colIndex;
      if (cell instanceof Ship && cell.name === 'carrier') {
        element.classList.add('carrier'); // 🩶 show ships visually
      }
      if (cell instanceof Ship && cell.name === 'battleship') {
        element.classList.add('battleship'); // 🩶 show ships visually
      }
      if (cell instanceof Ship && cell.name === 'cruiser') {
        element.classList.add('cruiser'); // 🩶 show ships visually
      }
      if (cell instanceof Ship && cell.name === 'submarine') {
        element.classList.add('submarine'); // 🩶 show ships visually
      }
      if (cell instanceof Ship && cell.name === 'destroyer') {
        element.classList.add('destroyer'); // 🩶 show ships visually
      }
      // if (cell === 'hit') {
      //   element.classList.add('hit');
      // }
      if (cell === 'miss') {
        element.classList.add('miss');
      }
      if (
        cell instanceof Ship &&
        cell.hits.some(([r, c]) => r === rowIndex && c === colIndex)
      ) {
        element.classList.add('hit');
      }
      
      player1Board.append(element);
    });
  });
};


export const drawComputerBoardInDOM = (computer, computerBoard) => {
  computerBoard.innerHTML = ''; // clear before redrawing
  computer.gameboard.board.forEach((row, rowIndex) => {  
    row.forEach((cell, colIndex) => {                     
      const element = makeElement('div', 'box');
      element.dataset.row = rowIndex;
      element.dataset.col = colIndex;
      // if (cell instanceof Ship && cell.name === 'carrier') {
      //   element.classList.add('carrier'); // 🩶 show ships visually
      // }
      // if (cell instanceof Ship && cell.name === 'battleship') {
      //   element.classList.add('battleship'); // 🩶 show ships visually
      // }
      // if (cell instanceof Ship && cell.name === 'cruiser') {
      //   element.classList.add('cruiser'); // 🩶 show ships visually
      // }
      // if (cell instanceof Ship && cell.name === 'submarine') {
      //   element.classList.add('submarine'); // 🩶 show ships visually
      // }
      // if (cell instanceof Ship && cell.name === 'destroyer') {
      //   element.classList.add('destroyer'); // 🩶 show ships visually
      // }
      computerBoard.append(element);
    });
  });
};


// const box1 = makeElement('div', 'box', page.grid1)

// export const box = makeElement('div', 'box', document.body, 'x');

