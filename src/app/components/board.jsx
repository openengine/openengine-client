import BoardColumn from './board_column.jsx'

function Board(props) {
  return (
    <div className="board-component container-fluid">
      <h1>Board</h1>
      <div className="row-fluid">
        <BoardColumn />
      </div>
    </div>
  );
}

export default Board;
