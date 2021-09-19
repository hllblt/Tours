import "./App.css";
// import Header from "./components/Header";
import Section from "./components/section";
import Refresh from "./components/refresh";

function App() {
  const a = 3;
  const b = 5;
  return (
    <div className="App">
      {/* <Header a={a} b ={b}/> */}
      <Section />
      {!document.getElementsByClassName("tours") && <Refresh />}
    </div>
  );
}

export default App;
