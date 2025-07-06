import './style.css';
import { Gameboard } from './gameboard';
import { Ship } from './ship';
// import { makeElement } from './cache-dom';
console.log("testt");
const gameboard1 = new Gameboard();
gameboard1.drawBoard();
const aircraftCarrier = new Ship(5);
const battleShip = new Ship(4);
const cruiser = new Ship(3);
const destroyer = new Ship(2);

gameboard1.placeShip(aircraftCarrier, 0, 0, 'vertical', aircraftCarrier.length);
gameboard1.placeShip(aircraftCarrier, 0, 1, 'vertical', aircraftCarrier.length);
gameboard1.receiveAttack(1,3);
// gameboard1.placeShip(2, 4, 'vertical', 4);
// gameboard1.placeShip(9, 3, 'horizontal', 3);
// gameboard1.placeShip(9, 0, 'horizontal', 3);

// console.log(aircraftCarrier);