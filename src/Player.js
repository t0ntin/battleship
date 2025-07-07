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
    const aircraftCarrier = new Ship(5);
    const battleShip = new Ship(4);
    const cruiser = new Ship(3);
    const submarine = new Ship(3);
    const destroyer = new Ship(2);
    const shipTypes = [destroyer, submarine, cruiser, battleShip, aircraftCarrier];

    shipTypes.forEach((shipType) => {
        let placed = false;

        while (!placed) {
          console.log('while loop');
            const randomRow = Math.floor(Math.random() * 10);
            const randomCol = Math.floor(Math.random() * 10);
            const randomDir = Math.random() < 0.5 ? 'horizontal' : 'vertical';

            // Attempt to place the ship
            placed = this.gameboard.placeShip(shipType, randomRow, randomCol, randomDir);
            console.log(`Attempting to place: ${shipType.length}`);

            // If placement fails, loop repeats automatically to retry
        }
    });
}

  // setUpFleet() {
  //   const aircraftCarrier = new Ship(5);
  //   const battleShip = new Ship(4);
  //   const cruiser = new Ship(3);
  //   const submarine = new Ship(3);
  //   const destroyer = new Ship(2);
  //   const shipTypes = [destroyer, submarine, cruiser, battleShip, aircraftCarrier];
  //   const randomRow = Math.floor(Math.random() *10)+1;
  //   const randomCol = Math.floor(Math.random() *10)+1;
  //   const pickDirection = () => {
  //     if (Math.random() < 0.5) { // Approximately 50% chance
  //       return 'vertical';
  //     } else { // The other 50% chance
  //       return 'horizontal';
  //     }
  //   } 
  //   const randomDir = pickDirection();

  //   shipTypes.forEach((shipType) => {
  //     this.placeShip(shipType, randomRow, randomCol, randomDir, shipType.length);
  //     if (this.board.placedShips <= 5) {
  //       continue;
  //     }
  //   })

  // }

}

