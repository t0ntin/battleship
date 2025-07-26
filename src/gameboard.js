
import { Ship } from "./ship";

export class Gameboard {
  constructor() {
    this.board = []; // this is your container for 10 rows
    this.numberofShips = 0;
    this.placedShips = [];
  }

  drawBoard() {
    this.board = [];
    for (let i = 0; i < 10; i++) {
        this.board.push(Array(10).fill(null));
    }
}

  checkForShips(shipType, rowIndex, colIndex, direction) {
    for (let i = 0; i < shipType.length; i++) {
        if (direction === 'horizontal') {
            if (colIndex + i >= 10) return true; // out of bounds
            if (this.board[rowIndex][colIndex + i] !== null) return true; // overlap
        } else if (direction === 'vertical') {
            if (rowIndex + i >= 10) return true; // out of bounds
            if (this.board[rowIndex + i][colIndex] !== null) return true; // overlap
        }
    }
    return false;
}

  placeShip(shipType, rowIndex, colIndex, direction) {
    // Ensure ship fits within board
    if (direction === 'horizontal' && colIndex + shipType.length > 10) return false;
    if (direction === 'vertical' && rowIndex + shipType.length > 10) return false;

    // Ensure no overlap
    if (this.checkForShips(shipType, rowIndex, colIndex, direction)) return false;

    // Place the ship
    for (let i = 0; i < shipType.length; i++) {
        if (direction === 'horizontal') {
            this.board[rowIndex][colIndex + i] = shipType;
        } else if (direction === 'vertical') {
            this.board[rowIndex + i][colIndex] = shipType;
        }
    }
    this.placedShips.push(shipType);
    return true;
}

receiveAttack(rowIndex, colIndex) {
  let currentCell = this.board[rowIndex][colIndex];

  // Check if the cell has already been attacked
  if (
    currentCell === 'miss' ||
    (currentCell instanceof Ship && currentCell.hits.some(([r, c]) => r === rowIndex && c === colIndex))
  ) {
    console.log('Cell has already been attacked.');
    return 'already-attacked';
  }

  // If it's a Ship
  if (currentCell instanceof Ship) {
    currentCell.increaseNumberOfHits(rowIndex, colIndex);
    currentCell.determineIfSunk();
    return 'hit';
  } else {
    this.board[rowIndex][colIndex] = 'miss'; // Mark as miss
    console.log('returning miss');
    return 'miss';
  }
}

  // receiveAttack(rowIndex, colIndex) {
  //   let currentCell = this.board[rowIndex][colIndex];

  //   // Check if the cell has already been hit
  //   if (currentCell === 'hit' || currentCell === 'miss') {
  //       console.log('Cell has already been attacked.');
  //       return 'already-attacked';  // or handle appropriately
  //   }
    
  //   // Check if it is a Ship
  //   if (currentCell instanceof Ship) {
  //       currentCell.increaseNumberOfHits();
  //       currentCell.determineIfSunk();
  //       this.board[rowIndex][colIndex] = 'hit'; // Mark as hit
  //       return 'hit';
  //   } else {
  //       this.board[rowIndex][colIndex] = 'miss'; // Mark as miss
  //       return 'miss';
  //   }
  // }

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

  getPotentialShipCoordinates(length, startRow, startCol, orientation) {
    const coordinates = [];
    for (let i = 0; i < length; i++) {
      let row = startRow;
      let col = startCol;
      if (orientation === 'horizontal') col += i;
      else row += i;
  
      // Check boundaries
      if (row >= 10 || col >= 10) return null; 
  
      coordinates.push([row, col]);
    }
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