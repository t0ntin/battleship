import { Gameboard } from "./gameboard"
import { Ship } from "./ship";
import { Player } from "./Player";

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
    const placeShipTest = gameboard.placeShip(aircraftCarrier, 1, 3, 'vertical', aircraftCarrier.length);
    const placeShipTest2 = gameboard.placeShip(aircraftCarrier, 2, 3, 'vertical', aircraftCarrier.length);
    expect(gameboard.board[0][3]).toBe(null);
    expect(gameboard.board[1][3]).toBe(aircraftCarrier);
    expect(gameboard.board[5][3]).toBe(aircraftCarrier);
    expect(gameboard.board[6][3]).toBe(null);

    const placeShipTest3 = gameboard.placeShip(aircraftCarrier, 0, 0, 'horizontal', aircraftCarrier.length);
    expect(gameboard.board[0][0]).toBe(aircraftCarrier);
    expect(gameboard.board[0][5]).toBe(null);

    const placeShipTest4 = gameboard.placeShip(aircraftCarrier, 0, 4, 'horizontal', aircraftCarrier.length);
    expect(gameboard.board[0][5]).toBe(null);

 
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
    expect(aircraftCarrier.isSunk).toBe(true);
  })


  test('countSunkShips() counts ships are sunk',() => {
    const gameboard = new Gameboard();

    gameboard.drawBoard();
    const aircraftCarrier = new Ship(5);
    const aircraftCarrier2 = new Ship(5);
    const placeShipTest = gameboard.placeShip(aircraftCarrier, 1, 3, 'vertical', aircraftCarrier.length);
    const placeShipTest2 = gameboard.placeShip(aircraftCarrier, 1, 4, 'vertical', aircraftCarrier.length);
    gameboard.receiveAttack(1, 3);
    gameboard.receiveAttack(2, 3);
    gameboard.receiveAttack(3, 3);
    gameboard.receiveAttack(4, 3);
    gameboard.receiveAttack(5, 3);
    gameboard.receiveAttack(1, 4);
    gameboard.receiveAttack(2, 4);
    gameboard.receiveAttack(3, 4);
    gameboard.receiveAttack(4, 4);
    gameboard.receiveAttack(5, 4);
    expect(gameboard.placedShips.length).toBe(2);

  }) 

  test('checkNumberOfShipsPlaced() makes sure no more than 5 ships are placed', () => {
    const gameboard = new Gameboard();

    gameboard.drawBoard();
    const aircraftCarrier = new Ship(5);
    const aircraftCarrier2 = new Ship(5);
    const aircraftCarrier3 = new Ship(5);
    const aircraftCarrier4 = new Ship(5);
    const aircraftCarrier5 = new Ship(5);
    const aircraftCarrier6 = new Ship(5);
    const placeShipTest = gameboard.placeShip(aircraftCarrier, 0, 0, 'vertical', aircraftCarrier.length);
    const placeShipTest2 = gameboard.placeShip(aircraftCarrier, 0, 1, 'vertical', aircraftCarrier.length);
    const placeShipTest3 = gameboard.placeShip(aircraftCarrier, 0, 2, 'vertical', aircraftCarrier.length);
    const placeShipTest4 = gameboard.placeShip(aircraftCarrier, 0, 3, 'vertical', aircraftCarrier.length);
    const placeShipTest5 = gameboard.placeShip(aircraftCarrier, 0, 4, 'vertical', aircraftCarrier.length);
    const placeShipTest6 = gameboard.placeShip(aircraftCarrier, 0, 5, 'vertical', aircraftCarrier.length);
    expect(gameboard.placedShips.length).toBe(5);
    
    
  })
  test('computerAttack() chooses cells to attack properly', () => {
    const player1 = new Player();
    player1.gameboard.drawBoard();

    const aircraftCarrier = new Ship(5);
    player1.gameboard.placeShip(aircraftCarrier, 0, 0, 'vertical', aircraftCarrier.length);

    // ✅ Count hits and misses before attack
    let hitOrMissCountBefore = 0;
    player1.gameboard.board.forEach(row => {
        row.forEach(cell => {
            if (cell === 'hit' || cell === 'miss') {
                hitOrMissCountBefore++;
            }
        });
    });
    expect(hitOrMissCountBefore).toBe(0);

    // ✅ Computer attacks
    const computer = new Player();
    computer.computerAttack(player1);

    // ✅ Count hits and misses after attack
    let hitOrMissCountAfter = 0;
    let hitFound = false;
    let missFound = false;

    player1.gameboard.board.forEach(row => {
        row.forEach(cell => {
            if (cell === 'hit' || cell === 'miss') {
                hitOrMissCountAfter++;
                if (cell === 'hit') hitFound = true;
                if (cell === 'miss') missFound = true;
            }
        });
    });

    expect(hitOrMissCountAfter).toBe(1);
    expect(hitFound || missFound).toBe(true); // confirm one of them happened
});
  test('computerAttack() calls receiveAttack() correctly', () => {
    const player1 = new Player();
    player1.gameboard.drawBoard()
    const computer = new Player();
    const receiveAttackMock = jest.fn();
    player1.gameboard.receiveAttack = receiveAttackMock;

    computer.computerAttack(player1);

    expect(receiveAttackMock).toHaveBeenCalled();

  })

  test('computerAttack calls receiveAttack on player\'s gameboard', () => {
    const player1 = new Player();
    const computer = new Player();
    player1.gameboard.drawBoard();
    computer.gameboard.drawBoard();
    
    // Fill player1's board with ships for a consistent test
    const destroyer = new Ship(2);
    player1.placeShip(destroyer, 0, 0, 'vertical', destroyer.length);

    // Mock receiveAttack on player1's gameboard
    const receiveAttackMock = jest.fn();
    player1.gameboard.receiveAttack = receiveAttackMock;

    // Call computerAttack
    computer.computerAttack(player1);

    // Assert that receiveAttack was called
    expect(receiveAttackMock).toHaveBeenCalled();
});

});
