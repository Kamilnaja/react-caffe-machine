import React, { Component } from 'react';
import OnOf from './OnOf';
import CaffeInfo from "./CaffeInfo";
import CaffeSpec from "./CaffeSpec";
import StartCaffe from "./StartCaffe";
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
          <OnOf
            updateOn={this.setEnabled}
            updateOf={this.setDisabled}
          />

          <CaffeSpec
            caffeSpecList={["Capuccino", "Latte", "Americano"]}
            enabled={this.state.enabled}
            updateSpec={this.setCaffe}
            />
          
          <StartCaffe 
            enabled={this.state.enabled}
          />

          <CaffeInfo
          enabled={this.state.enabled}
          caffeValue={this.state.caffeValue}
        />
      </div>
    );
  }
}

export default App;
