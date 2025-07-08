import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { player1 } from ".";

export class Player  {
  constructor () {
    this.gameboard = new Gameboard();
  }
  placeShip(shipType, rowIndex, colIndex, direction, length) {
    this.gameboard.placeShip(shipType, rowIndex, colIndex, direction, length);
  }

  setUpFleet() {
    const aircraftCarrier = new Ship(5);
    const battleShip = new Ship(4);
    const cruiser = new Ship(3);
    const submarine = new Ship(3);
    const destroyer = new Ship(2);
    const shipTypes = [destroyer, submarine, cruiser, battleShip, aircraftCarrier];

    const destroyer1 = new Ship(2);
    const destroyer2 = new Ship(2);
    const destroyer3 = new Ship(2);
    const destroyer4 = new Ship(2);
    const destroyer5 = new Ship(2);

    this.placeShip(destroyer1, 0, 0, 'vertical', destroyer.length);
    this.placeShip(destroyer2, 2, 0, 'vertical', destroyer.length);
    this.placeShip(destroyer3, 4, 0, 'vertical', destroyer.length);
    this.placeShip(destroyer4, 6, 0, 'vertical', destroyer.length);
    this.placeShip(destroyer5, 8, 0, 'vertical', destroyer.length);
    shipTypes.forEach((shipType) => {
      let placed = false;

      // while (!placed) {
      //   const randomRow = Math.floor(Math.random() * 10);
      //   const randomCol = Math.floor(Math.random() * 10);
      //   const randomDir = Math.random() < 0.5 ? 'horizontal' : 'vertical';

      //   // Attempt to place the ship
      //   placed = this.gameboard.placeShip(shipType, randomRow, randomCol, randomDir);
      //   console.log(`Attempting to place: ${shipType.length}`);

      //   // If placement fails, loop repeats automatically to retry
      // };
    });
  }
  computerAttack(player) {
    while (true) {
        const randomRow = Math.floor(Math.random() * 10);
        const randomCol = Math.floor(Math.random() * 10);

        const cellValue = player.gameboard.board[randomRow][randomCol];

        if (cellValue !== 'hit' && cellValue !== 'miss') {
            const result = player.gameboard.receiveAttack(randomRow, randomCol);
            return result; // returns 'hit' or 'miss'
        }
    }
  }

  // computerAttack(player) {
  //   let attackSuccessful = false;

  //   while (!attackSuccessful) {
  //     const randomRow = Math.floor(Math.random() * 10);
  //     const randomCol = Math.floor(Math.random() * 10);

  //     const cellValue = player.gameboard.board[randomRow][randomCol];

  //     if (cellValue !== 'hit' && cellValue !== 'miss') {
  //         player.gameboard.receiveAttack(randomRow, randomCol);
  //         attackSuccessful = true;
  //     }
  //   }
  // }



}

