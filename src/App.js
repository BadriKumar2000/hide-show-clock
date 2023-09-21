import { Component } from "react";
import Clock from "./components/clock";
import "./App.css";

class App extends Component {
  state = {
    hideClock: true,
  };

  onToggleClock = () => {
    this.setState((prevState) => ({ hideClock: !prevState.hideClock }));
  };

  render() {
    const { hideClock } = this.state;
    const buttonText = hideClock ? "Show Clock" : "Hide Clock";
    return (
      <div className="main-container">
        <button onClick={this.onToggleClock}>{buttonText}</button>
        {!hideClock && <Clock />}
      </div>
    );
  }
}

export default App;
