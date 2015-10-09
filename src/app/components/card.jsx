const cardStyle = {
  color: '#666',
  backgroundColor: '#fff'
};

function Card(props) {
  return (
    <div style={cardStyle} className="card-component container-fluid">
      <div className="row-fluid">
        <div className="col-md-4">
          <h5>Card Title</h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
