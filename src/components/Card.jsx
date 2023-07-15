/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <div className="card">
      {props.info.location ? (
        <>
          <h4>{props.info.location?.name}</h4>
          <h3>{props.info.current?.temp_c} C°</h3>

          <div className="region-group">
            <div className="region">
              <h5>{props.info.location?.region}</h5>
              <h5>{props.info.location?.country}</h5>
            </div>

            <small>{props.info.location?.localtime}</small>
          </div>
        </>
      ) : (
        <h4>No info, please search for another city.</h4>
      )}
    </div>
  );
}
