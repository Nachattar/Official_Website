
function Home(props) {
  return (
    <div id="home">
      <img
        src={props.image}
        alt={props.company}
        style={{ width: "100%" }}
      />
      <div className="w3-display-right w3-center">
        <span className="w3-text-white" style={{"fontSize":60}} > 
          {props.text}
        </span>
        <p>
          <a href="/about" className="w3-button w3-large w3-black">
            {props.buttonText}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
