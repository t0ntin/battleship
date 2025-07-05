import { Gameboard } from "./gameboard"

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
    const placeShipTest = gameboard.placeShip(1, 3, 'vertical', 4);
    expect(gameboard.board[1][3]).toBe('ship');
    expect(gameboard.board[2][3]).toBe('ship');
    expect(gameboard.board[3][3]).toBe('ship');
    expect(gameboard.board[4][3]).toBe('ship');
  })


  test('checkForShips() detects overlaps correctly', () => {
    const gameboard = new Gameboard();
    gameboard.drawBoard();
    const placeShipTest = gameboard.placeShip(1, 3, 'vertical', 4);
    const placeShipTest2 = gameboard.placeShip(3, 3, 'vertical', 4);
    expect(gameboard.board[0][3]).toBe(null);
    expect(gameboard.board[1][3]).toBe('ship');
    expect(gameboard.board[4][3]).toBe('ship');
    expect(gameboard.board[5][3]).toBe(null);
 
  })
  test('receiveAttack() marks cells as hit and miss correctly', () => {
    const gameboard = new Gameboard();
    gameboard.drawBoard();
    const placeShipTest = gameboard.placeShip(1, 3, 'vertical', 4);
    // First: hit
    gameboard.receiveAttack(2, 3); // hits the ship
    expect(gameboard.board[2][3]).toBe('hit');

    // Then: miss on a different cell
    gameboard.receiveAttack(0, 0); // no ship here
    expect(gameboard.board[0][0]).toBe('miss');
    

  })

})
