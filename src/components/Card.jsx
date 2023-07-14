/* eslint-disable react/prop-types */
function Card(props) {
  return (
    <div>
      <div>
        <h4>{props.city}</h4>
        <h3>{props.weather} C°</h3>
        <h5>{props.region}</h5>
        <h5>{props.country}</h5>
        <small>{props.time}</small>
      </div>
    </div>
  );
}

export default Card;
