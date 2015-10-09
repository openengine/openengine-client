import Card from './card.jsx'

const boardColumnStyle = {
  color: 'white',
  backgroundColor: '#999'
};

function BoardColumn(props) {
  return (
    <div style={boardColumnStyle} className="board-column-component col-md-4">
      <h3>BoardColumn Title</h3>
      <div className="row-fluid">
        <Card />
      </div>
    </div>
  );
}

export default BoardColumn;
