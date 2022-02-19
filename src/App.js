import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <div className="chating-fixed">
        <a href="#">
          <img src="img/icon-chat.png" alt="chatting xpress provider" />
        </a>
      </div>
      <Header />

      <div className="AppContainer">
        <Slider />
        <h3 class="slider-cards">Repeat Recent</h3>
        <Cards isPopular />
        <h3 class="slider-cards">Repeat Recent</h3>
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default App;
