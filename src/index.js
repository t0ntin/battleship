import './style.css';
import { Gameboard } from './gameboard';
console.log("testt");
const gameboard1 = new Gameboard();
gameboard1.drawBoard();
gameboard1.placeShip(1, 3, 'vertical', 4);
gameboard1.placeShip(2, 4, 'vertical', 4);
gameboard1.placeShip(9, 3, 'horizontal', 3);
gameboard1.placeShip(9, 0, 'horizontal', 3);

