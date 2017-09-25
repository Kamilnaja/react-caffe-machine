import React, { Component } from 'react';
import OnOf from './OnOf';
import CaffeInfo from "./CaffeInfo";
import CaffeSpec from "./CaffeSpec";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: true
    };
    this.setDisabled = this.setDisabled.bind(this);
    this.setEnabled =  this.setEnabled.bind(this);
  }
  setEnabled () {
    const { enabled } = this.state;
    this.setState({
      enabled: true
    });
    console.log(this.state.enabled);
  }

  setDisabled() {
    const { enabled } = this.state;
    this.setState({
      enabled: false
    });
    console.log(this.state.enabled);
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
          <CaffeInfo enabled={this.state.enabled}/>
          <CaffeSpec
            caffeSpecList={["Capuccino", "Latte", "Americano"]}
            enabled={this.state.enabled}
            />
        </form>
      </div>
    );
  }
}

export default App;
