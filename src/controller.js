import { Ship } from './ship';
import { Player } from './Player.js';


export const controlTurns = () => {
  const player1 = new Player();
  const computer = new Player();

  player1.gameboard.drawBoard();
  computer.gameboard.drawBoard();

  const aircraftCarrier = new Ship(5);
  const battleShip = new Ship(4);
  const cruiser = new Ship(3);
  const submarine = new Ship(3);
  const destroyer = new Ship(2);
 
  player1.placeShip(aircraftCarrier, 0, 0, 'vertical', aircraftCarrier.length);
  player1.placeShip(battleShip, 0, 1, 'vertical', battleShip.length);
  player1.placeShip(cruiser, 0, 2, 'vertical', cruiser.length);
  player1.placeShip(submarine, 0, 3, 'vertical', submarine.length);
  player1.placeShip(destroyer, 0, 4, 'vertical', destroyer.length);

  computer.setUpFleet();
  let shipsStillAfloat = true;
  while (shipsStillAfloat) {
    let player1StillAlive = player1.gameboard.countSunkShips();
    let computerStillAlive = computer.gameboard.countSunkShips();

    if(!player1StillAlive || !computerStillAlive) {
      shipsStillAfloat = false;
      break;
    }
    
    // PLAYER TURN
    let playerTurn = true;
    while (playerTurn) {

      let rowUserInput = prompt('Enter Row: ');
      let colUserInput = prompt('Enter Col: ');
      let rowIndex = Number(rowUserInput);
      let colIndex = Number(colUserInput);

      const player1Hits = computer.gameboard.receiveAttack(rowIndex, colIndex);
      if (player1Hits === 'hit') {
        console.log('Hit! You get to go again.');
      } else {
        console.log('Miss! Computer\'s turn');
        playerTurn = false;
      }
      // ADDED THIS
      if (computer.gameboard.countSunkShips() === false) {
        console.log('You won!');
        shipsStillAfloat = false;
        break;
      }
      // END OF ADDED CODE
      player1.gameboard.printBoard();
    }

    // COMPUTER TURN
    let computerTurn = true;
    while (computerTurn) {
      const computerHits = computer.computerAttack(player1); // assumes returns 'hit' or 'miss'
      if (computerHits === 'hit') {
          console.log('Computer hit! Computer goes again.');
          // computerTurn remains true, allowing repeat turn
      } else {
          console.log('Computer missed! Your turn.');
          computerTurn = false;
      }
      // ADDED CODE
      if (player1.gameboard.countSunkShips() === false) {
        console.log('Computer won!');
        shipsStillAfloat = false;
        break;
      }
      // END OF ADDED CODE
      // computer.gameboard.printBoard();

    }
  }

}
  




