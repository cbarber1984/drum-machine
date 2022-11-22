import { render } from "@testing-library/react";
import "./App.css";

function App() {
  const drumSource = [
    {
      letter: "q",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      letter: "w",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      letter: "e",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
  ];

  return (
    <div className="App">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <span class="fs-4">Drum Machine</span>
      </header>
      <div id="drum-machine" className="container-md">
        <div id="display">
          {/* map over array of objects, each object has two key-value pairs, key to display & sound to play */}
          {drumSource.map((item) => (
            <div>
              <button>{item.letter}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
