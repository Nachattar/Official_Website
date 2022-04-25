
function services(props) {
  return (
    <div className="w3-row">
      <div className="w3-half w3-padding-large w3-hide-small">
        <img
          src={props.img}
          className="w3-round w3-image w3-opacity-min"
          alt="Table"
          style={{"width":"100%"}}
        />
      </div>

      <div className="w3-half w3-padding-large">
        <h1 className="w3-center">{props.heading}</h1>
        <h5 className="w3-center">{props.description}</h5>
        <p className="w3-large">
          {props.why}
        </p>
        <p className="w3-large w3-text-grey w3-hide-medium">
         {props.solution}
        </p>
      </div>
    </div>
  );
}
export default services;
