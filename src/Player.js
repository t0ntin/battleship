import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

export class Player  {
  constructor () {
    this.gameboard = new Gameboard();
  }
  placeShip(shipType, rowIndex, colIndex, direction, length) {
    this.gameboard.placeShip(shipType, rowIndex, colIndex, direction, length);
  }

  setUpFleet() {
    const ships = [
      new Ship(5, 'carrier'),
      new Ship(4, 'battleship'),
      new Ship(3, 'cruiser'),
      new Ship(3, 'submarine'),
      new Ship(2, 'destroyer'),
    ];

    ships.forEach(shipType => {
      let placed = false;
      let attempts = 0;
      const maxAttempts = 100;
      console.log(`Placing ${shipType.name}...`);
      while (!placed && attempts < maxAttempts) {
          const randomRow = Math.floor(Math.random() * 10);
          const randomCol = Math.floor(Math.random() * 10);
          const randomDir = Math.random() < 0.5 ? 'horizontal' : 'vertical';
          placed = this.gameboard.placeShip(shipType, randomRow, randomCol, randomDir);
          attempts++;
      }
      if (!placed) {
          console.error(`Failed to place ${shipType.name} after ${attempts} attempts.`);
      }
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

}

