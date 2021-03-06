import React, { Component } from 'react';
import OnOf from './OnOf';
import CaffeInfo from "./CaffeInfo";
import Display from "./Display";
import StartCaffe from "./StartCaffe";
import CaffeSelect from "./CaffeSelect";
import CaffeGlass from "./CaffeGlass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: false,
      caffeValue: "Capuccino"
    };

    this.setDisabled = this.setDisabled.bind(this);
    this.setEnabled =  this.setEnabled.bind(this);
    this.updateCaffeValue = this.updateCaffeValue.bind(this);
    this.updateStartValue = this.updateStartValue.bind(this);
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
      enabled: false,
      makingCoffe: false,

    });
  }

  updateCaffeValue (event) {
    this.setState({caffeValue: event.target.value, makingCoffe: false});
  }

  updateStartValue () {
    this.setState ({
      makingCoffe: true
    })
  }

  render() {
    return (
      <div>
      <div className="App wrapper">
        <h1 className="title">Ekspress app</h1>
        
          <OnOf
            updateOn={this.setEnabled}
            updateOf={this.setDisabled}
          />

          <CaffeSelect 
          caffeSpecList={["Capuccino", "Latte", "Americano"]} 
          updateCaffeValue={this.updateCaffeValue}
          />

          <Display
            enabled={this.state.enabled}
            updateSpec={this.setCaffe}
            caffeValue={this.state.caffeValue}
            />
          
          <StartCaffe 
            enabled={this.state.enabled}
            caffeValue={this.state.caffeValue}
            caffeMaking={this.updateStartValue}
          />

      </div>
      <CaffeGlass 
      caffeValue={this.state.caffeValue}
      caffeMaking={this.state.makingCoffe}
      enabled={this.state.enabled}
    />
    </div>
    );
  }
}

export default App;
