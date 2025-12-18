import "./App.css";
import { BodyCards } from "./components/BodyCards";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Members } from "./components/Members";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <BodyCards />
        <Members />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
