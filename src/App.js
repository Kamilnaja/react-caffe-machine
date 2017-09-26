import React, { Component } from 'react';
import OnOf from './OnOf';
import CaffeInfo from "./CaffeInfo";
import CaffeSpec from "./CaffeSpec";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: true,
      caffeValue: "Latte"
    };

    this.setDisabled = this.setDisabled.bind(this);
    this.setEnabled =  this.setEnabled.bind(this);
    this.setCaffe = this.setCaffe.bind(this);
  }

  setEnabled () {
    const { enabled } = this.state;
    this.setState({
      enabled: true
    });
  }

  setDisabled() {
    const { enabled } = this.state;
    this.setState({
      enabled: false
    });
  }

  setCaffe(event) {
    this.setState({caffeValue: event.target.value});
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>Ekspress app</h1>
        <form>
          <OnOf
            updateOn={this.setEnabled}
            updateOf = {this.setDisabled}
          />
          <CaffeSpec
            caffeSpecList={["Capuccino", "Latte", "Americano"]}
            enabled={this.state.enabled}
            updateSpec={this.setCaffe}
            />
          <CaffeInfo
            enabled={this.state.enabled}
            caffeValue={this.state.caffeValue}
          />
        </form>
      </div>
    );
  }
}

export default App;
