import { Player } from './Player';
import { Ship } from './ship';
import {
  drawPlayer1BoardInDOM, drawComputerBoardInDOM,page} from './cache-dom';

  const availableShips = () => {
  const carrier = new Ship(5, 'carrier');
  const battleShip = new Ship(4, 'battleship');
  const cruiser = new Ship(3, 'cruiser');
  const submarine = new Ship(3, 'submarine');
  const destroyer = new Ship(2, 'destroyer');
  return [carrier, battleShip, cruiser, submarine, destroyer];
}

// SHIPTYPES IS AN ARRAY OF SHPS
const shipTypes = availableShips();


let currentOrientation = 'vertical';
let shipSelectedByUser = 'battleship';
export const controlTurns = () => {
  const player1 = new Player();
  const computer = new Player();



  // Draw logical boards
  player1.gameboard.drawBoard();
  computer.gameboard.drawBoard();

  // RANDOM PLACEMENT OF SHIPS FOR PLAYER1
  // shipTypes.forEach((shipType) => {
  //   let placed = false;
  //   while (!placed) {
  //     const randomRow = Math.floor(Math.random() * 10);
  //     const randomCol = Math.floor(Math.random() * 10);
  //     const randomDir = Math.random() < 0.5 ? 'horizontal' : 'vertical';
  //     placed = player1.gameboard.placeShip(shipType, randomRow, randomCol, randomDir);
  //   }
  // });

  // Place computer ships randomly
  computer.setUpFleet();

  // Draw boards visually
  drawPlayer1BoardInDOM(player1);
  drawComputerBoardInDOM(computer);

  // Had to add this here because they evaluate as undefined.
  page.computerBoardEls = document.querySelectorAll('.computer-board .box');
  page.player1BoardEls = document.querySelectorAll('.player1-board .box');

  // Attach event listeners
  addComputerBoardListeners();

  const foundShipName = shipTypes.find(ship => ship.name === shipSelectedByUser);
  addHoverPlacementListeners(foundShipName, currentOrientation);

  // ---- Local Functions ---- //

  function handlePlayerClick(e) {
    const box = e.target;
    const row = Number(box.dataset.row);
    const col = Number(box.dataset.col);

    // Prevent attacking same spot twice
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
    } else {
      box.classList.add('miss');
      console.log("You missed! Computer's turn.");

      // Check win condition after player turn
      if (!computer.gameboard.countSunkShips()) {
        console.log('You win!');
        removeComputerBoardListeners();
        return;
      }

      // Computer's turn
      setTimeout(() => {
        computerTurn();
      }, 500);
    }

    // Check win condition after player hit
    if (!computer.gameboard.countSunkShips()) {
      console.log('You win!');
      removeComputerBoardListeners();
      return;
    }
  }

  function computerTurn() {
    let result;
    do {
      result = computer.computerAttack(player1);
      drawPlayer1BoardInDOM(player1);

      if (!player1.gameboard.countSunkShips()) {
        console.log('Computer wins!');
        removeComputerBoardListeners();
        return;
      }

      if (result === 'hit') {
        console.log('Computer hit! Computer goes again.');
      } else {
        console.log('Computer missed! Your turn.');
      }
    } while (result === 'hit');
  }

  function addComputerBoardListeners() {
    page.computerBoardEls.forEach((cell) => {
      cell.addEventListener('click', handlePlayerClick);
    });
  }

  function removeComputerBoardListeners() {
    page.computerBoardEls.forEach((cell) => {
      cell.removeEventListener('click', handlePlayerClick);
    });
  }

  function addHoverPlacementListeners(ship, orientation) {
    function handleMouseEnter(e) {
      const row = Number(e.target.dataset.row);
      const col = Number(e.target.dataset.col);
      const hoverCoords = player1.gameboard.getPotentialShipCoordinates(
        ship.length,
        row,
        col,
        orientation
      );
      if (!hoverCoords) return; // out of bounds
  
      const isValid = hoverCoords.every(([r, c]) => player1.gameboard.board[r][c] === null);
  
      hoverCoords.forEach(([r, c]) => {
        const cell = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
        if (cell) {
          cell.classList.add(isValid ? 'valid-hover' : 'invalid-hover');
        }
      });
    }
  
    function handleMouseLeave() {
      document.querySelectorAll('.valid-hover, .invalid-hover').forEach(cell => {
        cell.classList.remove('valid-hover', 'invalid-hover');
      });
    }
  
    function handlePlacementClick(e) {
      const row = Number(e.target.dataset.row);
      const col = Number(e.target.dataset.col);
      const hoverCoords = player1.gameboard.getPotentialShipCoordinates(
        ship.length,
        row,
        col,
        orientation
      );
      if (!hoverCoords) return;
  
      const isValid = hoverCoords.every(([r, c]) => player1.gameboard.board[r][c] === null);
      if (!isValid) {
        console.log('Invalid placement.');
        return;
      }
  
      // Place ship in logical board
      player1.gameboard.placeShip(ship, row, col, orientation, ship.length);
  
      // Update DOM
      drawPlayer1BoardInDOM(player1);
  
      // Remove hover and click listeners to prevent duplicate placement
      page.player1BoardEls.forEach(cell => {
        cell.removeEventListener('mouseenter', handleMouseEnter);
        cell.removeEventListener('mouseleave', handleMouseLeave);
        cell.removeEventListener('click', handlePlacementClick);
      });
  
      console.log(`${ship.name} placed. Game starts now.`);
      addComputerBoardListeners(); // Start gameplay
    }
  
    page.player1BoardEls.forEach(cell => {
      cell.addEventListener('mouseenter', handleMouseEnter);
      cell.addEventListener('mouseleave', handleMouseLeave);
      cell.addEventListener('click', handlePlacementClick);
    });
  }
  




};

// BUTTON TO RANDOMIZE THE BOARD
const randomizePlayer1Board = () =>{
  controlTurns();
}
page.randomizeEl.addEventListener('click', randomizePlayer1Board)




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

