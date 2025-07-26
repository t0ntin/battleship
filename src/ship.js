export class Ship {
  constructor(length, name) {
    this.length = length;
    this.numberOfHits = 0;
    this.isSunk = false;
    this.name = name;
    this.hits = [];
  }
  increaseNumberOfHits(row, col) {
    this.numberOfHits++
    this.hits.push([row, col]);
  }

  determineIfSunk() {
    if (this.numberOfHits === this.length) {
      this.isSunk = true;
      console.log('ship sunk');
      console.log(this.hits);
    }
  }
}