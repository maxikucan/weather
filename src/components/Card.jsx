/* eslint-disable react/prop-types */
function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{props.city}</h4>
        <h3 className="card-title">{props.weather} C°</h3>
        <h5 className="card-title">{props.region}</h5>
        <h5 className="card-text">{props.country}</h5>
        <small>{props.time}</small>
      </div>
    </div>
  );
}

export default Card;
