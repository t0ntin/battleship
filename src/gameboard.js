
import { ship } from "./ship";
import { makeElement } from "./cache-dom";
import { page } from "./cache-dom";
export class Gameboard {
  constructor() {
    this.board = []; // this is your container for 10 rows
  }
    drawBoard() { // created this function first

      for (let i = 0; i < 10; i++) {
        const row = []; // this is one row
        // console.log(row);
        // page.grid1.append(row);
        for (let j = 0; j < 10; j++) {
          
          row.push(null); // fill each row with 10 cells (currently empty)
        }
        this.board.push(row); // add the row to your board
      }
      // console.log(this.board);
    }
    
    checkForShips(rowIndex, colIndex, direction, length) { //created this function third
      for (let i = 0; i < length; i++) {
        if (direction === 'horizontal') {
            if (this.board[rowIndex][colIndex + i] === 'ship') {
                console.log('Cannot place ship here: overlap detected.');
                return true; //I had 'return' only here initially. I thought return would be the same as return true, but it's not. checkForShips() inside of placeShip() needs to be true for it to stop.
            }
        } else if (direction === 'vertical') {
            if (this.board[rowIndex + i][colIndex] === 'ship') {
                console.log('Cannot place ship here: overlap detected.');
                return true; // exit placeShip early
            }
        }
      }
      return false; //no overlap detected.
    }
    
    placeShip(rowIndex, colIndex, direction, length) { // Created this function second.
      if (this.checkForShips(rowIndex, colIndex, direction, length)) {
        console.log('overlap found. Exiting');
        return; // overlap found, exit early
      }
      // rowIndex = 3;
      // colIndex = 0;
      // direction = 'vertical';
      // length = 4;
      if (direction === 'horizontal' && colIndex + length <= 10) {
        // If colindex is 8 and length is 4, it goes to position (0,8), then it adds the length of the ship, which is 4, and it evaluates to false, so it doesn't place the ship.
        for (let i = 0; i < length; i++) {
          this.board[rowIndex][colIndex +i] = 'ship';
        }
      }
      if (direction === 'vertical' && rowIndex + length <=10) {
        // if direction is vertical, rowindex is 3, and colindex is 0, it goes to the (fourth) row, then the first column (0), then adds the rowindex to the length of the ship (7). Then it types in ship in boxes (0,3) to (0,7 which is [6)])
        for ( let i=0; i < length; i++) {
          this.board[rowIndex +i][colIndex] = 'ship';
        }
      }
      console.log(JSON.stringify(this.board));
    }
}



const ShipXl = new ship(5);
const ShipL = new ship(4);
const ShipM = new ship(3);
const ShipS = new ship(2);
// 1️⃣ Decide on grid size (e.g., 10x10).
// 2️⃣ Decide how to represent ship positions internally.
// 3️⃣ Decide how to track attacks.
// 4️⃣ Determine methods you need, e.g.:

// placeShip(ship, startingCoord, direction)

// receiveAttack(coord)

// allShipsSunk()

// 5️⃣ Think about edge cases:

// Attacking the same spot twice.

// Placing a ship partially outside the board.