import { Link } from "react-router-dom";
import Header from "./Header";

function Menu() {
  return (
    <div className="w3-top w3-bar w3-black">
      <Header logo="/images/Logo.png" alt="Nachattar Consultancy"/>
      <div className = "w3-right">
      <Link to="/" className="w3-bar-item w3-button  w3-mobile">
        Home
      </Link>

      <Link to="/about" className="w3-bar-item w3-button  w3-mobile">
        AboutUs
      </Link>

      <Link to="/services" className="w3-bar-item w3-button  w3-mobile">
        Services
      </Link>

      <Link to="/contact" className="w3-bar-item w3-button  w3-mobile">
        ContactUs
      </Link>
    </div>
    </div>
  );
}
export default Menu;
