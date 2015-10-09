import BoardColumn from './board_column.jsx'

export default function Board(props) {
  return (
    <div className="board-component container-fluid">
      <h1>Board</h1>
      <div className="row-fluid">
        <BoardColumn />
      </div>
    </div>
  );
}
