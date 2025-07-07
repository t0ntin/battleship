import './style.css';
import { Gameboard } from './gameboard';
import { Ship } from './ship';
import { Player } from './Player.js';

// import { makeElement } from './cache-dom';
console.log("testt");
const gameboard1 = new Gameboard();
gameboard1.drawBoard();
const aircraftCarrier = new Ship(5);
const battleShip = new Ship(4);
const cruiser = new Ship(3);
const submarine = new Ship(3);
const destroyer = new Ship(2);

gameboard1.placeShip(aircraftCarrier, 0, 0, 'vertical', aircraftCarrier.length);
gameboard1.placeShip(aircraftCarrier, 0, 1, 'vertical', aircraftCarrier.length);
gameboard1.receiveAttack(0,0);


const player1 = new Player();
const computer = new Player();

player1.gameboard.drawBoard();
player1.setUpFleet();
console.log(player1.gameboard.placedShips);
// console.log(player1.gameboard);
// player1.placeShip(aircraftCarrier, 0, 0, 'vertical', aircraftCarrier.length);
// console.log(JSON.stringify(player1.gameboard.board));