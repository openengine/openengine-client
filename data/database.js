export class Board extends Object {}

var board = new Board();
board.id = '1';
board.name = 'Caliboard';

var boardLil = new Board();
boardLil.id = '2';
boardLil.name = 'Lilyboard';

export function getBoard() { return board; }
export function getBoards() { return [board, boardLil]; }
