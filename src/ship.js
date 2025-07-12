export class Ship {
  constructor(length, name) {
    this.length = length;
    this.numberOfHits = 0;
    this.isSunk = false;
    this.name = name;
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