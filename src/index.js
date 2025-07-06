import './style.css';
import { Gameboard } from './gameboard';
import { Ship } from './ship';
// import { makeElement } from './cache-dom';
console.log("testt");
const gameboard1 = new Gameboard();
gameboard1.drawBoard();
const aircraftCarrier = new Ship(length);
const battleShip = new Ship(length);
const cruiser = new Ship(length);
const destroyer = new Ship(length);

gameboard1.placeShip(aircraftCarrier, 1, 3, 'vertical', 5);
gameboard1.placeShip(aircraftCarrier, 2, 3, 'vertical', 5);
gameboard1.receiveAttack(1,3);
// gameboard1.placeShip(2, 4, 'vertical', 4);
// gameboard1.placeShip(9, 3, 'horizontal', 3);
// gameboard1.placeShip(9, 0, 'horizontal', 3);

// console.log(aircraftCarrier);