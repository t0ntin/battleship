
import { Ship } from "./ship";
import { makeElement } from "./cache-dom";
import { page } from "./cache-dom";
export class Gameboard {
  constructor() {
    this.board = []; // this is your container for 10 rows
    this.numberofShips = 0;
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
  
  checkForShips(shipType,rowIndex, colIndex, direction, length) { //created this function third
    for (let i = 0; i < length; i++) {
      if (direction === 'horizontal') {
          if (this.board[rowIndex][colIndex + i] instanceof Ship) {
              console.log('Cannot place ship here: overlap detected.');
              return true; //I had 'return' only here initially. I thought return would be the same as return true, but it's not. checkForShips() inside of placeShip() needs to be true for it to stop.
          }
      } else if (direction === 'vertical') {
          if (this.board[rowIndex + i][colIndex] instanceof Ship) {
              console.log('Cannot place ship here: overlap detected.');
              return true; // exit placeShip early
          }
      }
    }
    return false; //no overlap detected.
  }
  
  placeShip(shipType, rowIndex, colIndex, direction, length) { // Created this function second.
    if (this.checkForShips(shipType, rowIndex, colIndex, direction, length)) {
      console.log('overlap found. Exiting');
      return; // overlap found, exit early
    }
    if (direction === 'horizontal' && colIndex + length <= 10) {
      // If colindex is 8 and length is 4, it goes to position (0,8), then it adds the length of the ship, which is 4, and it evaluates to false, so it doesn't place the ship.
      for (let i = 0; i < length; i++) {
        this.board[rowIndex][colIndex +i] = shipType;
      }
      this.createShip(length);
    }
    if (direction === 'vertical' && rowIndex + length <=10) {
      // if direction is vertical, rowindex is 3, and colindex is 0, it goes to the (fourth) row, then the first column (0), then adds the rowindex to the length of the ship (7). Then it types in ship in boxes (0,3) to (0,7 which is [6)])
      for ( let i=0; i < length; i++) {

        this.board[rowIndex +i][colIndex] = shipType;
      }
      // console.log(this.board[6][3]);

    }
    console.log(JSON.stringify(this.board));
  }

  receiveAttack(rowIndex, colIndex) {
    let currentCell = this.board[rowIndex][colIndex];
    if (currentCell instanceof Ship) {
      currentCell.increaseNumberOfHits();
      currentCell.determineIfSunk();
      console.log(JSON.stringify(this.board));
      console.log(currentCell.numberOfHits);
      // shipType.increaseNumberOfHits();
      return 'hit';
    } else {
      currentCell = 'miss';
      console.log(JSON.stringify(this.board));
      return 'miss';
    }
    // if (this.board[rowIndex][colIndex] === 'ship') {
    //   this.board[rowIndex][colIndex] = 'hit';
    //   console.log(JSON.stringify(this.board));
    //   return 'hit';
    // } else {
    //   this.board[rowIndex][colIndex] = 'miss';
    //   console.log(JSON.stringify(this.board));
    //   return 'miss';
    // }
  }
  
  // createShip(length) {
  //   if (length === 5) {
  //     const aircraftCarrier = new Ship(length);
  //     this.numberofShips++
  //     console.log(aircraftCarrier);
  //     console.log(this.numberofShips);
  //   }
  //   if (length === 4) {
  //     const battleShip = new Ship(length);
  //   }
  //   if (length === 3) {
  //     const cruiser = new Ship(length);
  //   }
  //   if (length === 2) {
  //     const destroyer = new Ship(length);
  //   }
  //   return;
  // }

  trackHits() {

  }
}



const ShipXl = new Ship(5);
const ShipL = new Ship(4);
const ShipM = new Ship(3);
const ShipS = new Ship(2);
