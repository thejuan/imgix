import "./App.css";
import { Background } from "react-imgix";

function App() {
  return (
    <div className="App" style={{ background: "black" }}>
      <Background src="./cat.png">
     Works
      </Background>
    </div>
  );
}

export default App;
