import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="AppContainer">
        <Slider />
      </div>
      <Footer />
    </div>
  );
}

export default App;
