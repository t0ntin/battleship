export class Ship {
  constructor(length) {
    this.length = length;
    this.numberOfHits = 0;
    this.isSunk = false;
  }
  increaseNumberOfHits () {
    this.numberOfHits++
  }

  determineIfSunk() {
    if (this.numberOfHits === this.length) {
      this.isSunk = true;
      console.log('ship sunk');
    }
    
  }
}