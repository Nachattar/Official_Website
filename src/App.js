import Data from "./data/services.json";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w3-display-container">
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              image="/images/extendhelp.jpg"
              company="Nachattar Consultancy"
              text="Let's help you grow!"
              buttonText="Learn More!"
            />
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/services"
          element={
            <div id="services" className="w3-padding-64 ">
              {Data.map((service) => {
                return (
                  <Services
                    key={service.img}
                    heading={service.heading}
                    description={service.description}
                    why={service.why}
                    solution={service.solution}
                    img={service.img}
                  />
                );
              })}
            </div>
          }
        />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer
        gitLink="https://github.com/nachattar"
        id="footer"
        githubLogo="/images/github-white.png"
      />
    </div>
  );
}

export default App;
