import { controlTurns } from "./controller";
import { Ship } from "./ship";

const myPage = () => {
  const playerBoard = document.querySelector('.player1-board')
  const computerBoard = document.querySelector('.computer-board')
  const shipContainer = document.querySelector('.ship-container')
  return {playerBoard, computerBoard, shipContainer}
}
export const page = myPage();

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

// export const drawPlayerBoard = (player1) => {
//   player1.gameboard.board.forEach(row => {
//     row.forEach(cell => {
//       const element = makeElement('div', 'box');
//       page.playerBoard.append(element)
//     });
//   });
// };
export const drawPlayer1BoardInDOM = (player1) => {
  page.playerBoard.innerHTML = ''; // clear before redrawing
  player1.gameboard.board.forEach(row => {
    row.forEach(cell => {
      const element = makeElement('div', 'box');
      if (cell instanceof Ship) {
        element.classList.add('ship'); // 🩶 show ships visually
      }
      page.playerBoard.append(element);
    });
  });
};


export const drawComputerBoardInDOM = (computer) => {
  page.computerBoard.innerHTML = ''; // clear before redrawing
  computer.gameboard.board.forEach((row, rowIndex) => {   // ✅ fixed here
    row.forEach((cell, colIndex) => {                     // ✅ fixed here
      const element = makeElement('div', 'box');
      element.dataset.row = rowIndex;
      element.dataset.col = colIndex;
      if (cell instanceof Ship) {
        element.classList.add('ship'); // 🩶 show ships visually
      }
      page.computerBoard.append(element);
    });
  });
};


const box1 = makeElement('div', 'box', page.grid1)

export const box = makeElement('div', 'box', document.body, 'x');

