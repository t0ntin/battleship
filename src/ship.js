export class ship {
  constructor(length) {
    this.length = length;
    this.numberOfHits = 0;
    this.isSunk = false;
  }
  increaseNumberOfHits () {
    this.numberOfHits++
  }

  determineIfSunk() {
    
  }
}


