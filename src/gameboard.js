
import { Ship } from "./ship";
import { makeElement } from "./cache-dom";
import { page } from "./cache-dom";
export class Gameboard {
  constructor() {
    this.board = []; // this is your container for 10 rows
    this.numberofShips = 0;
    this.placedShips = [];
  }
  drawBoard() { // created this function first

    for (let i = 0; i < 10; i++) {
      const row = []; // this is one row
      for (let j = 0; j < 10; j++) {
        
        row.push(null); // fill each row with 10 cells (currently empty)
      }
      this.board.push(row); // add the row to your board
    }
    // console.log(this.board);
  }

  checkForShips(shipType,rowIndex, colIndex, direction) { //created this function third

    for (let i = 0; i < shipType.length; i++) {
      if (direction === 'horizontal') {
        if (colIndex + i >= 10) {
          return true; // Out of bounds, treat as overlap to block placement
        }
          if (this.board[rowIndex][colIndex + i] instanceof Ship) {
              console.log('Cannot place ship here: overlap detected.');
              return true; //I had 'return' only here initially. I thought return would be the same as return true, but it's not. checkForShips() inside of placeShip() needs to be true for it to stop.
          }
      } else if (direction === 'vertical') {
        if (rowIndex + i >= 10) {
          return true; // Out of bounds, treat as overlap to block placement
        }
          if (this.board[rowIndex + i][colIndex] instanceof Ship) {
              console.log('Cannot place ship here: overlap detected.');
              return true; // exit placeShip early
          }
      }
    }
    return false; //no overlap detected.
  }
  
  placeShip(shipType, rowIndex, colIndex, direction) { // Created this function second.
    const allFiveShipsPlaced = this.checkNumberOfShipsPlaced();
    if (allFiveShipsPlaced === false) {
      return false;
    }
    if (this.checkForShips(shipType, rowIndex, colIndex, direction, shipType.length)) {
      console.log('overlap found. Exiting');
      return false; // overlap found, exit early
    }
    if (direction === 'horizontal' && colIndex + shipType.length <= 10) {
      // If colindex is 8 and length is 4, it goes to position (0,8), then it adds the length of the ship, which is 4, and it evaluates to false, so it doesn't place the ship.
      for (let i = 0; i < shipType.length; i++) {
        this.board[rowIndex][colIndex +i] = shipType;
      }
      this.placedShips.push(shipType);
      // console.log(this.placedShips);
    }
    if (direction === 'vertical' && rowIndex + shipType.length <=10) {
      // if direction is vertical, rowindex is 3, and colindex is 0, it goes to the (fourth) row, then the first column (0), then adds the rowindex to the length of the ship (7). Then it types in ship in boxes (0,3) to (0,7 which is [6)])
      for ( let i=0; i < shipType.length; i++) {

        this.board[rowIndex +i][colIndex] = shipType;
      }
      this.placedShips.push(shipType);
      // console.log(this.placedShips);

    }
    // console.log(JSON.stringify(this.board));
    return true;
  }

  receiveAttack(rowIndex, colIndex) {
    let currentCell = this.board[rowIndex][colIndex];

    // Check if the cell has already been hit
    if (currentCell === 'hit' || currentCell === 'miss') {
        console.log('Cell has already been attacked.');
        return 'already-attacked';  // or handle appropriately
    }
    
    // Check if it is a Ship
    if (currentCell instanceof Ship) {
        currentCell.increaseNumberOfHits();
        currentCell.determineIfSunk();
        this.board[rowIndex][colIndex] = 'hit'; // Mark as hit
        return 'hit';
    } else {
        this.board[rowIndex][colIndex] = 'miss'; // Mark as miss
        return 'miss';
    }
  }

  countSunkShips() {
    let count = 0;
    this.placedShips.forEach((ship) => {
      if (ship.isSunk === true) {
        count++
        // console.log(count);
      }
    })
    if (count === 5) {
      return false;
    } else return true;
  }

  checkNumberOfShipsPlaced() {
    if (this.placedShips.length >= 5) {
      return false;
    } else 
    return true;
  }

  getShipCoordinates(ship) {
    const coordinates = []
    this.board.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (col === ship) {
          coordinates.push([rowIndex, colIndex])
        }
      })
    })
    return coordinates;
  }

  // removeShip(ship) {
  //   this.board.forEach((row, rowindex) => {
  //     row.forEach((col, colIndex) => {
  //       if (col === ship) {
  //         col = null;
  //       }
  //     })
  //   })
  // }

  printBoard() {
    let visual = '';
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = this.board[row][col];
        if (cell instanceof Ship) {
          visual += 'S ';
        } else if (cell === 'hit') {
          visual += 'H ';
        } else if (cell === 'miss') {
          visual += 'M ';
        } else {
          visual += '. ';
        }
      }
      visual += '\n';
    }
    // console.log(visual);
  }
  
}