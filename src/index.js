import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// React-Redux Drum Machine

// Create Key Banks: KeyCodes, Key Triggers, Id's and sound clip urls and store each as objects in an array
// Note, refer to MDN Network for info on key events as some have been depreciated or the syntax has changed.

// This is my first version
{
  /* 
// Bank one provides some options for music creation.
const bankOne = [
  {
    keyCode: 81, //
    keyString: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyString: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyString: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyString: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyString: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyString: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyString: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyString: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyString: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

// Bank two gives the user some additional choice in their music creation.
const bankTwo = [
  {
    keyCode: 81,
    keyString: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyString: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyString: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyString: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyString: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyString: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyString: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyString: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyString: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

// DrumPad Component (individual pads)
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    //Bindings
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  // React Lifecycle Hooks
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  // React Component Functions
  handleKeyPress(e) {
    // Handles any and all keypress events for the Drum machine
    if (e.keyCode === this.props.keyCode) {
      // 'keyCode' is passed into this components props via the PadBank component
      this.playSound();
      console.log(e.keyCode + " " + this.props.keyCode);
    }
  }
  playSound(e) {
    // Plays the required sound on key press
    const sound = document.getElementById(this.props.keyString);
    sound.currentTime = 0;
    sound.play();
    this.props.updateDisplay(this.props.clipId.replace(/-/g, " "));
    // The javascript replace method will swap out strings,
    // we use the regex to get all of the current string and swap it out
  }

  render() {
    return (
      <div id={this.props.clipId} onClick={this.playSound} className="drum-pad">
        <audio
          className="clip"
          id={this.props.keyString}
          src={this.props.clipSource}
        ></audio>
        {this.props.keyString}
      </div>
    );
  } // End Render
} // End Component

// PadBank Component: Renders and popultates properties of all the DrumPads.
class PadBank extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let padBank = this.props.currentPadBank.map((item, index, array) => {
      return (
        <DrumPad
          key={index}
          clipId={array[index].id}
          clipSource={array[index].url}
          keyCode={array[index].keyCode}
          keyString={array[index].keyString}
          updateDisplay={this.props.updateDisplay}
        />
      );
    });
    return <div className="padBank">{padBank}</div>;
  }
}

// App Component
class UpdatedApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPadBank: bankOne,
      display: "",
    };
    //Bindings
    this.displayClipName = this.displayClipName.bind(this);
  }
  // React Lifecycle Hooks

  // React Component Functions

  // Update the display name
  displayClipName(name) {
    this.setState({
      display: name,
    });
  }
  // Render
  render() {
    return (
      <div id="drum-machine" className="inner-container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <span className="fs-4">Drum Machine</span>
        </header>
        <PadBank
          currentPadBank={this.state.currentPadBank}
          updateDisplay={this.displayClipName}
        />
        <div id="display">
          <p>Press the corresponding keys or click on them with the mouse</p>
          <p>Sample name:</p>
          <p id="sample-name">{this.state.display}</p>
        </div>
      </div>
    );
  }
}

*/
}

// this is my second version

const firstSoundsGroup = [
  {
    keyCode: 81, //
    keyString: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyString: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyString: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyString: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyString: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyString: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyString: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyString: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyString: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

// Bank two gives the user some additional choice in their music creation.
const secondSoundsGroup = [
  {
    keyCode: 81,
    keyString: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyString: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyString: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyString: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyString: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyString: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyString: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyString: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyString: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const soundsName = {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit",
};

const soundsGroup = {
  heaterKit: firstSoundsGroup,
  smoothPianoKit: secondSoundsGroup,
};

const KeyboardKey = ({ play, sound: { keyString, url, keyCode } }) => {
  const handleKeydown = (event) => {
    if (event.keyCode === keyCode) {
      play(keyString);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, []);

  return (
    <button className="drum-pad" onClick={() => play(keyString)}>
      <audio className="clip" id={keyString} src={url} />
      {keyString}
    </button>
  );
};

const Keyboard = ({ play, sounds }) => {
  return sounds.map((sound) => <KeyboardKey play={play} sound={sound} />);
};

const DrumControl = ({ changeSoundsGroup }) => (
  <div className="control">
    <h2>Controls</h2>
    <button onClick={changeSoundsGroup}>Change Sound Group</button>
  </div>
);

const RevisedApp = () => {
  const [soundType, setSoundType] = React.useState("heaterKit");
  const [sounds, setSounds] = React.useState(soundsGroup[soundType]);

  const play = (keyString) => {
    const audio = document.getElementById(keyString);
    audio.currentTime = 0;
    audio.play();
  };

  const changeSoundsGroup = () => {
    if (soundType === "heaterKit") {
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType("heaterKit");
      setSounds(soundsGroup.heaterKit);
    }
  };

  return (
    <div id="app-wrapper">
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <div className="inner-container">
          <div className="padBank">
            <Keyboard play={play} sounds={sounds} />
          </div>
          <DrumControl changeSoundsGroup={changeSoundsGroup} />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RevisedApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
