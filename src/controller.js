import { Player } from './Player';
import { Ship } from './ship';
import {
  drawPlayer1BoardInDOM, drawComputerBoardInDOM, makeElement} from './cache-dom';

const availableShips = () => {
  const carrier = new Ship(5, 'carrier');
  const battleShip = new Ship(4, 'battleship');
  const cruiser = new Ship(3, 'cruiser');
  const submarine = new Ship(3, 'submarine');
  const destroyer = new Ship(2, 'destroyer');
  return [carrier, battleShip, cruiser, submarine, destroyer];
}

const createPlayers = () => {
  const player1 = new Player();
  const computer = new Player();
  return {player1, computer}
}

export const initialize = () => {
  const main = makeElement('div', 'main', document.body, 'test');
  const player1Board = makeElement('div', 'player1-board', main, 'player-1board');
  const randomPlacementEl = makeElement('button', 'random-placement-button', main, 'randomize placement' )
  const middleContainer = makeElement('div', 'middle-container', main)
  const computerBoard = makeElement('div', 'computer-board', main, 'computer-board');
  const handleRandomization = createRandomizationHandler(player1Board);
  main.addEventListener('click', handleRandomization);

  const players = createPlayers();

  players.player1.gameboard.drawBoard();
  players.computer.gameboard.drawBoard();
  
  // SHIPTYPES IS AN ARRAY OF SHPS
  const shipTypes = availableShips();

    // Place computer ships randomly
  players.player1.setUpFleet();
  players.computer.setUpFleet();

  // Draw boards visually
  // console.log(players.player1);
  // console.log(player1Board);
  drawPlayer1BoardInDOM(players.player1, player1Board);
  drawComputerBoardInDOM(players.computer, computerBoard);

  const gameState = {
    isPlayerTurn: true,
    gameOver: false,
  };

  // Using event delegation so I don't have to use removeeventlistener.
  computerBoard.addEventListener('click', (e) => {
    if (gameState.gameOver) return; // prevent any clicks after game ends

    const cell = e.target.closest('.box');
    if (!cell) return;
    if (!gameState.isPlayerTurn) return;

    const playerMissed = handlePlayerClick(e, players.player1, players.computer, player1Board, computerBoard, gameState, middleContainer);

    if (playerMissed) {
        isPlayerTurn = false;
        setTimeout(() => {
          console.log("middleContainer:", middleContainer);
            computerTurn(players.player1, players.computer, player1Board, computerBoard, gameState, middleContainer);
            gameState.isPlayerTurn = true;
        }, 500);
    }
});


  return {player1: players.player1, computer: players.computer};
}

function handlePlayerClick(e, player1, computer, player1Board, computerBoard, gameState, middleContainer) {
  const box = e.target;
  const row = Number(box.dataset.row);
  const col = Number(box.dataset.col);

  // Prevent attacking same spot twice
  // console.log(computer.gameboard);
  if (
    computer.gameboard.board[row][col] === 'hit' ||
    computer.gameboard.board[row][col] === 'miss'
  ) {
    console.log('Already attacked here.');
    return;
  }

  const result = computer.gameboard.receiveAttack(row, col);
  if (result === 'hit') {
    box.classList.add('hit');
    console.log('You hit! Go again.');
    // middleContainer.innerText = 'It\'s a hit! Your turn again.';
    fadeText(middleContainer, 'It\'s a hit! Your turn again.')
  } else {
    box.classList.add('miss');
    console.log("You missed! Computer's turn.");
    fadeText(middleContainer, 'You missed. It\'s the computer\'s turn.')

    // Check win condition after player turn
    if (!computer.gameboard.countSunkShips()) {
      console.log('You win!');
      // removeComputerBoardListeners();
      return;
    }

    // Computer's turn
    setTimeout(() => {
      computerTurn(player1, computer, player1Board, computerBoard,  gameState,  middleContainer);
    }, 2000);
  }

  // Check win condition after player hit
  if (!computer.gameboard.countSunkShips()) {
    console.log('You win!');
    gameState.gameOver = true;
    return false;
  }
}

function computerTurn(player1, computer, player1Board, computerBoard, gameState, middleContainer) {
  function attackLoop() {
    if (gameState.gameOver) return;

    const result = computer.computerAttack(player1);
    drawPlayer1BoardInDOM(player1, player1Board);

    if (!player1.gameboard.countSunkShips()) {
      console.log('Computer wins!');
      fadeText(middleContainer, 'Computer wins!');
      gameState.gameOver = true;
      return;
    }

    if (result === 'hit') {
      console.log('Computer hit! Computer goes again.');
      fadeText(middleContainer, "Computer hit! It's the computer's turn.");

      // Wait before attacking again so the message is visible
      setTimeout(attackLoop, 1000);
    } else {
      console.log('Computer missed! Your turn.');
      fadeText(middleContainer, "Computer missed! It's your turn.");
      // Return control to the player
    }
  }
  attackLoop();
}


const createRandomizationHandler = (player1Board) => {
  return (e) => {
    if (e.target.matches('.random-placement-button')) {
      const players = createPlayers();
      players.player1.gameboard.drawBoard();
      players.player1.setUpFleet();
      drawPlayer1BoardInDOM(players.player1, player1Board);
    }
  };
};

const fadeText = (element, newText) => {
  // Remove oldest message if we have 2 already
  const messages = element.querySelectorAll('.text-updates');
  if (messages.length >= 2) {
    messages[0].remove();
  }

  // Create new message
  const textEl = makeElement('div', 'text-updates', element);
  textEl.textContent = newText;

  // Trigger animation
  void textEl.offsetWidth;
  textEl.classList.add('visible');
};



// *****************
// FIND OUT WHY IT MOVES SO FAST AFTER PLAYER1 MISSES
// MAKE THE TEXT CONTAINER 3 MESSAGES TALL.
// ****************
// const fadeText = (element, newText) => {
//   const textEl = makeElement('div', 'text-updates', element);

//   textEl.append(newText, document.createElement('br'));

//   // Trigger fade in on the next frame
// // Force reflow
// void textEl.offsetWidth;
// textEl.style.opacity = '1';

// };

// const fadeText = (element, newText) => {
//   // Fade out
//   const textEl = makeElement('span', '.text-updates', element);
//   textEl.style.opacity = '0';
//   // Wait for fade out to complete (500ms matches our CSS transition)
//   setTimeout(() => {
//     // Change text when invisible
//     // element.innerText = newText;
//     // element.append(textEl);
//     textEl.append(newText, document.createElement('br'));
    
//     // Fade back in
//     textEl.style.opacity = '1';
//   }, 500);
// };
// function addComputerBoardListeners(player1, computer, player1Board, computerBoard) {
//   const computerBoardEls = document.querySelectorAll('.computer-board .box');
//   computerBoardEls.forEach((cell) => {
//     // Create a named wrapper and store it on the cell
//     cell._handlePlayerClick = (e) => handlePlayerClick(e, player1, computer, player1Board, computerBoard);
//     cell.addEventListener('click', cell._handlePlayerClick);
//   });
// }

// function removeComputerBoardListeners() {
//   const computerBoardEls = document.querySelectorAll('.computer-board .box');
//   computerBoardEls.forEach((cell) => {
//     if (cell._handlePlayerClick) {
//       cell.removeEventListener('click', cell._handlePlayerClick);
//       delete cell._handlePlayerClick; // optional cleanup
//     }
//   });
// }



//   const initApp = () => {
//     // IMPORTANT: Get your cached DOM elements here, as they should be ready now
//     const page = getPageElements();

//     // Ensure elements are available before proceeding
//     if (!page) {
//         console.error("Application initialization failed: DOM elements not ready.");
//         return;
//     }

//     console.log("App initialized! Page elements ready for use.");
//     console.log("Example access:", page.computerBoardEls);

//     // 3. Set up your main event listeners and initial game state
//     // You'll move the DOM-related code from your index.js and controller.js DOMContentLoaded blocks here.

//     // Example: Attaching the computer board click listener
//     if (page.computerBoardEls) {
//         page.computerBoardEls.forEach((cell) => {
//             // Make sure handlePlayerClick is defined or imported in this scope
//             cell.addEventListener('click', handlePlayerClick);
//         });
//     }

//     // Example: Attaching the randomize button listener
//     if (page.randomizeEl) {
//         page.randomizeEl.addEventListener('click', randomizePlayer1Board);
//     }

//     // 4. Call your main game control logic to start the game flow
//     controlTurns(); // Assuming this function starts the turn-based gameplay

//     // You might also have initial setup functions here, e.g.:
//     // setupPlayerBoards(page); // Pass page elements if needed
// };

// // 5. Export this single initialization function
// export { initApp };
    // ===========================
    // THIS CODE WORKS UP TO THE POINT OF PLACING THE SHIPS;
    // ========================

//   const availableShips = () => {
//   const carrier = new Ship(5, 'carrier');
//   const battleShip = new Ship(4, 'battleship');
//   const cruiser = new Ship(3, 'cruiser');
//   const submarine = new Ship(3, 'submarine');
//   const destroyer = new Ship(2, 'destroyer');
//   return [carrier, battleShip, cruiser, submarine, destroyer];
// }

// // SHIPTYPES IS AN ARRAY OF SHPS
// const shipTypes = availableShips();


// let currentOrientation = 'vertical';
// let shipSelectedByUser = 'battleship';
// export const controlTurns = () => {
//   const player1 = new Player();
//   const computer = new Player();



//   // Draw logical boards
//   player1.gameboard.drawBoard();
//   computer.gameboard.drawBoard();

//   // RANDOM PLACEMENT OF SHIPS FOR PLAYER1
//   shipTypes.forEach((shipType) => {
//     let placed = false;
//     while (!placed) {
//       const randomRow = Math.floor(Math.random() * 10);
//       const randomCol = Math.floor(Math.random() * 10);
//       const randomDir = Math.random() < 0.5 ? 'horizontal' : 'vertical';
//       placed = player1.gameboard.placeShip(shipType, randomRow, randomCol, randomDir);
//     }
//   });

//   // Place computer ships randomly
//   computer.setUpFleet();

//   // Draw boards visually
//   drawPlayer1BoardInDOM(player1);
//   drawComputerBoardInDOM(computer);

//   // Had to add this here because they evaluate as undefined.
//   page.computerBoardEls = document.querySelectorAll('.computer-board .box');
//   page.player1BoardEls = document.querySelectorAll('.player1-board .box');

//           // REMOVED THESE LINES:
//   // addComputerBoardListeners();

//   // const foundShipName = shipTypes.find(ship => ship.name === shipSelectedByUser);
//   // addHoverPlacementListeners(foundShipName, currentOrientation);
//         // REPLACED THEM WITH THIS NEXT LINE:
//   placePlayer1ShipsManually();

//   // ---- Local Functions ---- //

//   function handlePlayerClick(e) {
//     const box = e.target;
//     const row = Number(box.dataset.row);
//     const col = Number(box.dataset.col);

//     // Prevent attacking same spot twice
//     if (
//       computer.gameboard.board[row][col] === 'hit' ||
//       computer.gameboard.board[row][col] === 'miss'
//     ) {
//       console.log('Already attacked here.');
//       return;
//     }

//     const result = computer.gameboard.receiveAttack(row, col);
//     if (result === 'hit') {
//       box.classList.add('hit');
//       console.log('You hit! Go again.');
//     } else {
//       box.classList.add('miss');
//       console.log("You missed! Computer's turn.");

//       // Check win condition after player turn
//       if (!computer.gameboard.countSunkShips()) {
//         console.log('You win!');
//         removeComputerBoardListeners();
//         return;
//       }

//       // Computer's turn
//       setTimeout(() => {
//         computerTurn();
//       }, 500);
//     }

//     // Check win condition after player hit
//     if (!computer.gameboard.countSunkShips()) {
//       console.log('You win!');
//       removeComputerBoardListeners();
//       return;
//     }
//   }

//   function computerTurn() {
//     let result;
//     do {
//       result = computer.computerAttack(player1);
//       drawPlayer1BoardInDOM(player1);

//       if (!player1.gameboard.countSunkShips()) {
//         console.log('Computer wins!');
//         removeComputerBoardListeners();
//         return;
//       }

//       if (result === 'hit') {
//         console.log('Computer hit! Computer goes again.');
//       } else {
//         console.log('Computer missed! Your turn.');
//       }
//     } while (result === 'hit');
//   }

//   function addComputerBoardListeners() {
//     page.computerBoardEls.forEach((cell) => {
//       cell.addEventListener('click', handlePlayerClick);
//     });
//   }

//   function removeComputerBoardListeners() {
//     page.computerBoardEls.forEach((cell) => {
//       cell.removeEventListener('click', handlePlayerClick);
//     });
//   }

//   function addHoverPlacementListeners(ship, orientation, onPlacedCallback) {
//     function handleMouseEnter(e) {
//       const row = Number(e.target.dataset.row);
//       const col = Number(e.target.dataset.col);
//       const hoverCoords = player1.gameboard.getPotentialShipCoordinates(
//         ship.length,
//         row,
//         col,
//         orientation
//       );
//       if (!hoverCoords) return; // out of bounds
  
//       const isValid = hoverCoords.every(([r, c]) => player1.gameboard.board[r][c] === null);
  
//       hoverCoords.forEach(([r, c]) => {
//         const cell = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
//         if (cell) {
//           cell.classList.add(isValid ? 'valid-hover' : 'invalid-hover');
//         }
//       });
//     }
  
//     function handleMouseLeave() {
//       document.querySelectorAll('.valid-hover, .invalid-hover').forEach(cell => {
//         cell.classList.remove('valid-hover', 'invalid-hover');
//       });
//     }
  
//     function handlePlacementClick(e) {
//       const row = Number(e.target.dataset.row);
//       const col = Number(e.target.dataset.col);
//       const hoverCoords = player1.gameboard.getPotentialShipCoordinates(
//         ship.length,
//         row,
//         col,
//         orientation
//       );
//       if (!hoverCoords) return;
  
//       const isValid = hoverCoords.every(([r, c]) => player1.gameboard.board[r][c] === null);
//       if (!isValid) {
//         console.log('Invalid placement.');
//         return;
//       }
  
//       // Place ship in logical board
//       player1.gameboard.placeShip(ship, row, col, orientation, ship.length);
  
//       // Update DOM
//       drawPlayer1BoardInDOM(player1);
  
//       // Remove hover and click listeners to prevent duplicate placement
//       page.player1BoardEls.forEach(cell => {
//         cell.removeEventListener('mouseenter', handleMouseEnter);
//         cell.removeEventListener('mouseleave', handleMouseLeave);
//         cell.removeEventListener('click', handlePlacementClick);
//       });

//       if (onPlacedCallback) {
//         onPlacedCallback();
//       }
      
//       console.log(`${ship.name} placed. Game starts now.`);
//       addComputerBoardListeners(); // Start gameplay
//     }
  
//     page.player1BoardEls.forEach(cell => {
//       cell.addEventListener('mouseenter', handleMouseEnter);
//       cell.addEventListener('mouseleave', handleMouseLeave);
//       cell.addEventListener('click', handlePlacementClick);
//     });
//   }
  
//   function placePlayer1ShipsManually() {
//     let currentShipIndex = 0;
//     const orientations = ['horizontal', 'vertical']; // or your toggle logic
//     let currentOrientation = orientations[0];        // adjust if needed
  
//     function placeNextShip() {
//       if (currentShipIndex >= shipTypes.length) {
//         console.log('✅ All ships placed! Starting the game.');
//         addComputerBoardListeners();
//         return;
//       }
  
//       const currentShip = shipTypes[currentShipIndex];
//       console.log(`Place your ${currentShip.name}`);
  
//       addHoverPlacementListeners(currentShip, currentOrientation, () => {
//         currentShipIndex++;
//         placeNextShip();
//       });
//     }
  
//     placeNextShip();
//   }
  



// };

// // BUTTON TO RANDOMIZE THE BOARD
// const randomizePlayer1Board = () =>{
//   controlTurns();
// }
// page.randomizeEl.addEventListener('click', randomizePlayer1Board)

      // ==========================
      // END OF WORKING CODE THAT I DISABLED IN ORDER TO REFACTOR
      // ==========================




//  **********************
//  CODE GEMINI GAVE ME TO HAVE ONLY ONE FUNCTION CALL IN THE APP:
//  ***********************
// src/app.js (or src/game.js, src/main.js - choose a descriptive name)

// // 1. Import all the modules you need for your application
// import { getPageElements } from './cache-dom.js'; // To get your DOM elements
// import { controlTurns } from './controller.js';   // Your main game controller logic
// // import { setupPlayerBoards } from './boardSetup.js'; // Example: if you have a function for initial board setup
// // import { handlePlayerClick } from './controller.js'; // If you want to attach specific handlers here
// // import { randomizePlayer1Board } from './controller.js'; // If you want to attach specific handlers here

// // 2. Define the single function that will initialize your entire application
// const initApp = () => {
//     // IMPORTANT: Get your cached DOM elements here, as they should be ready now
//     const page = getPageElements();

//     // Ensure elements are available before proceeding
//     if (!page) {
//         console.error("Application initialization failed: DOM elements not ready.");
//         return;
//     }

//     console.log("App initialized! Page elements ready for use.");
//     console.log("Example access:", page.computerBoardEls);

//     // 3. Set up your main event listeners and initial game state
//     // You'll move the DOM-related code from your index.js and controller.js DOMContentLoaded blocks here.

//     // Example: Attaching the computer board click listener
//     if (page.computerBoardEls) {
//         page.computerBoardEls.forEach((cell) => {
//             // Make sure handlePlayerClick is defined or imported in this scope
//             cell.addEventListener('click', handlePlayerClick);
//         });
//     }

//     // Example: Attaching the randomize button listener
//     if (page.randomizeEl) {
//         page.randomizeEl.addEventListener('click', randomizePlayer1Board);
//     }

//     // 4. Call your main game control logic to start the game flow
//     controlTurns(); // Assuming this function starts the turn-based gameplay

//     // You might also have initial setup functions here, e.g.:
//     // setupPlayerBoards(page); // Pass page elements if needed
// };

// // 5. Export this single initialization function
// export { initApp };
//           ================
//             END OF GEMINI CODE
//           ===============



// const getShipInfo = () => {
//   const ships = {};
//   shipTypes.forEach(shipType => {
//     ships[shipType.name] = {
//       name: shipType.name,
//       length: shipType.length,
//       orientation: currentOrientation
//     }
  
//   })
// return ships;
// }
// const shipDataToHover = getShipInfo();
// console.log(shipDataToHover);



// export const controlTurns = () => {
//   const player1 = new Player();
//   const computer = new Player();

//   player1.gameboard.drawBoard();
//   computer.gameboard.drawBoard();

//   // Place ships for player1
//   // const carrier = new Ship(5, 'carrier');
//   // const battleShip = new Ship(4, 'battleship');
//   // const cruiser = new Ship(3, 'cruiser');
//   // const submarine = new Ship(3, 'submarine');
//   // const destroyer = new Ship(2, 'destroyer');

//   // const shipTypes = {
//   //   carrier: carrier,
//   //   battleship: battleShip,
//   //   cruiser: cruiser,
//   //   submarine: submarine,
//   //   destroyer: destroyer,
//   // };

//   // player1.placeShip(new Ship(5), 0, 0, 'vertical', 5);
//   // player1.placeShip(new Ship(4), 0, 1, 'vertical', 4);
//   // player1.placeShip(new Ship(3), 0, 2, 'vertical', 3);
//   // player1.placeShip(new Ship(3), 0, 3, 'vertical', 3);
//   // player1.placeShip(new Ship(2), 0, 4, 'vertical', 2);
//   // const shipTypes = [
//   //   carrier,
//   //   battleShip,
//   //   cruiser,
//   //   submarine,
//   //   destroyer,
//   // ];
//   shipTypes.forEach((shipType) => {
//     let placed = false;

//     while (!placed) {
//       const randomRow = Math.floor(Math.random() * 10);
//       const randomCol = Math.floor(Math.random() * 10);
//       const randomDir = Math.random() < 0.5 ? 'horizontal' : 'vertical';

//       // Attempt to place the ship
//       placed = player1.gameboard.placeShip(
//         shipType,
//         randomRow,
//         randomCol,
//         randomDir
//       );
//       // console.log(`Attempting to place: ${shipType.length}`);
//     }
//   });
//   // Place ships for computer
//   computer.setUpFleet();

//   drawPlayer1BoardInDOM(player1);
//   drawComputerBoardInDOM(computer);
//   page.computerBoardEls = document.querySelectorAll('.computer-board .box');
//   console.log(page.computerBoardEls);
//   const handlePlayerClick = (e) => {
//     const box = e.target;
//     const row = Number(box.dataset.row);
//     const col = Number(box.dataset.col);

//     if (computer.gameboard.board[row][col] === 'hit')
//       if (
//         computer.gameboard.board[row][col] === 'hit' ||
//         computer.gameboard.board[row][col] === 'miss'
//       ) {
//         console.log('Already attacked here.');
//         return;
//       }

//     const result = computer.gameboard.receiveAttack(row, col);
//     if (result === 'hit') {
//       box.classList.add('hit');
//       console.log('You hit! Go again.');
//     } else {
//       box.classList.add('miss');
//       console.log("You missed! Computer's turn.");

//       // Check win condition after player turn
//       if (!computer.gameboard.countSunkShips()) {
//         console.log('You win!');
//         removeListeners();
//         return;
//       }

//       // Computer's turn
//       setTimeout(() => {
//         computerTurn();
//       }, 500);
//     }

//     // Check win condition after player hit
//     if (!computer.gameboard.countSunkShips()) {
//       console.log('You win!');
//       removeListeners();
//       return;
//     }
//   };

//   const computerTurn = () => {
//     let result;
//     do {
//       result = computer.computerAttack(player1);
//       drawPlayer1BoardInDOM(player1);

//       if (!player1.gameboard.countSunkShips()) {
//         console.log('Computer wins!');
//         removeListeners();
//         return;
//       }

//       if (result === 'hit') {
//         console.log('Computer hit! Computer goes again.');
//       } else {
//         console.log('Computer missed! Your turn.');
//       }
//     } while (result === 'hit');
//   };

//   const removeListeners = () => {
//     computerCells.forEach((box) => {
//       box.removeEventListener('click', handlePlayerClick);
//     });
//   };


//   // const ships = document.querySelectorAll('.ship-section .ship');
//   // const handleDragstart = (e) => {
//   //   e.dataTransfer.setData('text/plain', e.target.id);
//   // }
//   // ships.forEach((ship) => {
//   //   ship.addEventListener('dragstart', handleDragstart);
//   // });

//   // // DRAG AND ROP FOR PLAYER1 SHIPS
  
//   // const player1Cells = document.querySelectorAll('.player1-board .box');
//   // player1Cells.forEach((cell) => {
//   //   cell.addEventListener('dragover', (e) => {
//   //     e.preventDefault();
//   //   });

//   //   cell.addEventListener('drop', (e) => {
//   //     e.preventDefault();
//   //     const player1ShipID = e.dataTransfer.getData('text/plain');
//   //     console.log(player1ShipID);
//   //     console.log('dropped',player1ShipID,'on cell:',cell.dataset.coordinates );
//   //     const shipEl = document.getElementById(player1ShipID);
//   //     const ship = shipTypes[player1ShipID];
//   //     console.log(ship);
//   //     const length = ship.length;
//   //     let direction = 'vertical';
//   //     console.log('direction', direction);
//   //     const rowIndex = Number(cell.dataset.coordinates[0]);
//   //     const colIndex = Number(cell.dataset.coordinates[2]);
//   //     if (
//   //       player1.gameboard.placeShip(
//   //         ship,
//   //         rowIndex,
//   //         colIndex,
//   //         direction,
//   //         ship.length
//   //       )
//   //     ) {
//   //           // cell.append(shipEl); // instead of appending, I changed the class name so it would look better in the DOM.
//   //       cell.classList.add('ship');
//   //       shipEl.parentElement.removeChild(shipEl);

//   //       shipEl.removeAttribute('draggable'); // removes dragged ships from the ship container.
//   //       shipEl.removeEventListener('dragstart', handleDragstart);
//   //     }
//   //     const shipCoordinates = player1.gameboard.getShipCoordinates(ship);
//   //     console.log(shipCoordinates);

//   //     shipCoordinates.forEach((item) => {
//   //       let row = item[0];
//   //       let col = item[1];
//   //       let shipElements = document.querySelector(
//   //         `[data-row="${row}"][data-col="${col}"]`
//   //       );
//   //       shipElements.classList.add('ship');
//   //     });

//   //     console.log(JSON.stringify(shipCoordinates));

//   //     console.log(player1.gameboard.board);
//   //   });
//   // });
//   // //END OF DRAG AND ROP FOR PLAYER1 SHIPS


//   const computerCells = document.querySelectorAll('.computer-board .box');
//   computerCells.forEach((cell) => {
//     cell.addEventListener('click', handlePlayerClick);
//   });




// };

