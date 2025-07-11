import { Player } from './Player';
import { Ship } from './ship';
import {
  drawPlayer1BoardInDOM,
  drawComputerBoardInDOM,
  page,
} from './cache-dom';

export const controlTurns = () => {
  const player1 = new Player();
  const computer = new Player();

  player1.gameboard.drawBoard();
  computer.gameboard.drawBoard();

  // Place ships for player1
  const carrier = new Ship(5);
  const battleShip = new Ship(4);
  const cruiser = new Ship(3);
  const submarine = new Ship(3);
  const destroyer = new Ship(2);

  const shipTypes = {
    'carrier': carrier,
    'battleship': battleShip,
    'cruiser': cruiser,
    'submarine': submarine,
    'destroyer': destroyer
  };
  
  // player1.placeShip(new Ship(5), 0, 0, 'vertical', 5);
  // player1.placeShip(new Ship(4), 0, 1, 'vertical', 4);
  // player1.placeShip(new Ship(3), 0, 2, 'vertical', 3);
  // player1.placeShip(new Ship(3), 0, 3, 'vertical', 3);
  // player1.placeShip(new Ship(2), 0, 4, 'vertical', 2);
  // const shipTypes = [
  //   carrier,
  //   battleShip,
  //   cruiser,
  //   submarine,
  //   destroyer,
  // ];
  // shipTypes.forEach((shipType) => {
  //   let placed = false;

  //   while (!placed) {
  //     const randomRow = Math.floor(Math.random() * 10);
  //     const randomCol = Math.floor(Math.random() * 10);
  //     const randomDir = Math.random() < 0.5 ? 'horizontal' : 'vertical';

  //     // Attempt to place the ship
  //     placed = player1.gameboard.placeShip(
  //       shipType,
  //       randomRow,
  //       randomCol,
  //       randomDir
  //     );
  //     // console.log(`Attempting to place: ${shipType.length}`);
  //   }
  // });
  // Place ships for computer
  computer.setUpFleet();

  drawPlayer1BoardInDOM(player1);
  drawComputerBoardInDOM(computer);

  const handlePlayerClick = (e) => {
    const box = e.target;
    const row = Number(box.dataset.row);
    const col = Number(box.dataset.col);

    if (computer.gameboard.board[row][col] === 'hit')
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
        removeListeners();
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
      removeListeners();
      return;
    }
  };

  const computerTurn = () => {
    let result;
    do {
      result = computer.computerAttack(player1);
      drawPlayer1BoardInDOM(player1);

      if (!player1.gameboard.countSunkShips()) {
        console.log('Computer wins!');
        removeListeners();
        return;
      }

      if (result === 'hit') {
        console.log('Computer hit! Computer goes again.');
      } else {
        console.log('Computer missed! Your turn.');
      }
    } while (result === 'hit');
  };

  const removeListeners = () => {
    computerCells.forEach((box) => {
      box.removeEventListener('click', handlePlayerClick);
    });
  };
  const ships = document.querySelectorAll('.ship-section .ship');
  ships.forEach(ship => {
    ship.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
    })
  });

  // DRAG AND ROP FOR PLAYER1 SHIPS
  const player1Cells = document.querySelectorAll('.player1-board .box');
  player1Cells.forEach(cell => {
    cell.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    cell.addEventListener('drop', (e) => {
      e.preventDefault();
      const player1ShipID = e.dataTransfer.getData('text/plain'); 
      console.log('dropped', player1ShipID, 'on cell:', cell.dataset.coordinates);
      const shipEl = document.getElementById(player1ShipID);
      const ship = shipTypes[player1ShipID];
      const length = ship.length;
      const direction = 'horizontal';
      const rowIndex = Number(cell.dataset.coordinates[0]);
      const colIndex = Number(cell.dataset.coordinates[2]);
      if (player1.gameboard.placeShip(ship, rowIndex, colIndex, 'horizontal', ship.length)) {
        cell.append(shipEl);
      }
      
      const shipCoordinates = []
      player1.gameboard.board.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
          if (col instanceof Ship) {
            shipCoordinates.push([rowIndex,colIndex]);
          }
        });
      });
      shipCoordinates.forEach((item) => {
        let row = item[0];
        let col = item[1];
        let shipCells = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        shipCells.classList.add('ship');

      });

      console.log(JSON.stringify(shipCoordinates));
      
      console.log(player1.gameboard.board);


    });
  });
  //END OF DRAG AND ROP FOR PLAYER1 SHIPS

  const computerCells = document.querySelectorAll('.computer-board .box');
  computerCells.forEach((cell) => {
    cell.addEventListener('click', handlePlayerClick);
  });
  


  
  

  const enableDragAndDrop = (e) => {
  }
  // console.log(enableDragAndDrop());
};
