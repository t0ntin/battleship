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

    shipTypes.forEach((shipType) => {
      let placed = false;

      while (!placed) {
        const randomRow = Math.floor(Math.random() * 10);
        const randomCol = Math.floor(Math.random() * 10);
        const randomDir = Math.random() < 0.5 ? 'horizontal' : 'vertical';

        // Attempt to place the ship
        placed = this.gameboard.placeShip(shipType, randomRow, randomCol, randomDir);
        console.log(`Attempting to place: ${shipType.length}`);

        // If placement fails, loop repeats automatically to retry
      };
    });
  }

  computerAttack(player) {
    let attackSuccessful = false;

    while (!attackSuccessful) {
        const randomRow = Math.floor(Math.random() * 10);
        const randomCol = Math.floor(Math.random() * 10);

        const cellValue = player.gameboard.board[randomRow][randomCol];

        if (cellValue !== 'hit' && cellValue !== 'miss') {
            player.gameboard.receiveAttack(randomRow, randomCol);
            attackSuccessful = true;
        }
    }
  }



}

