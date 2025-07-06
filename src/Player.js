import { Gameboard } from "./gameboard";

export class Player  {
  constructor () {
    this.gameboard = new Gameboard();
  }
  placeShip(shipType, rowIndex, colIndex, direction, length) {
    this.gameboard.placeShip(shipType, rowIndex, colIndex, direction, length);
  }

  

}

