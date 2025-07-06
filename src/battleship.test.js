import { Gameboard } from "./gameboard"
import { Ship } from "./ship";

describe('Gameboard class.', () => {

  test('board initializes correctly', () => {
    const gameboard = new Gameboard();
    gameboard.drawBoard();
    expect(gameboard.board.length).toBe(10);
  });

  test('all cells are initialized to null', () => {
    const gameboard = new Gameboard();
    gameboard.drawBoard();

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            expect(gameboard.board[row][col]).toBe(null);
        }
    }
  });

  test('placeShip() places ships correctly', () => {
    const gameboard = new Gameboard();
    gameboard.drawBoard();
    const aircraftCarrier = new Ship(5);
    const placeShipTest = gameboard.placeShip(aircraftCarrier, 1, 3, 'vertical', 4);
    expect(gameboard.board[1][3]).toBe(aircraftCarrier);
    expect(gameboard.board[2][3]).toBe(aircraftCarrier);
    expect(gameboard.board[3][3]).toBe(aircraftCarrier);
    expect(gameboard.board[4][3]).toBe(aircraftCarrier);
  })


  test('checkForShips() detects overlaps correctly', () => {
    const gameboard = new Gameboard();
    gameboard.drawBoard();
    const aircraftCarrier = new Ship(5);
    const placeShipTest = gameboard.placeShip(aircraftCarrier, 1, 3, 'vertical', 5);
    const placeShipTest2 = gameboard.placeShip(aircraftCarrier, 2, 3, 'vertical', 5);
    expect(gameboard.board[0][3]).toBe(null);
    expect(gameboard.board[1][3]).toBe(aircraftCarrier);
    expect(gameboard.board[5][3]).toBe(aircraftCarrier);
    expect(gameboard.board[6][3]).toBe(null);
 
  })
  test('receiveAttack() marks cells as hit and miss correctly', () => {
    const gameboard = new Gameboard();
    gameboard.drawBoard();
    const aircraftCarrier = new Ship(5);
    const placeShipTest = gameboard.placeShip(aircraftCarrier, 1, 3, 'vertical', 5);
    // First: hit
    gameboard.receiveAttack(2, 3);
    expect(gameboard.board[2][3] instanceof Ship).toBe(true);
    expect(gameboard.board[2][3].numberOfHits).toBe(1);
    expect(gameboard.board[2][3].isSunk).toBe(false);
    expect(gameboard.board[0][0]).toBe(null);    

    gameboard.receiveAttack(1, 3);
    gameboard.receiveAttack(3, 3);
    gameboard.receiveAttack(4, 3);
    gameboard.receiveAttack(5, 3);
    expect(gameboard.board[2][3].isSunk).toBe(true);



  })

})
