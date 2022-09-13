import "./App.css";
import Banner from "./components/Banner";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Timeline from "./components/Timeline";
import Tributes from "./components/Tributes";

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Biography />
      <Timeline />
      <Tributes />
      <Footer />
    </div>
  );
}

export default App;
