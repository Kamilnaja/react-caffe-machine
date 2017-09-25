import React, { Component } from 'react';
import OnOf from './OnOf';
import CaffeInfo from "./CaffeInfo";
import CaffeSpec from "./CaffeSpec";
class App extends Component {

  myCallback = (dataFromChild) => {
    // console.log(dataFromChild);
    return dataFromChild;
  };
  render() {
    const _enabled = this.myCallback;
    console.log(this.dataFromChild);
    return (
      <div className="App">
        <h1>Ekspress app</h1>
        <form>
          <OnOf callbackFromParent={this.myCallback} />
          <CaffeInfo />
          <CaffeSpec
            caffeSpecList={["Capuccino", "Latte", "Americano"]}
            enabled={_enabled} />
        </form>
      </div>
    );
  }
}

export default App;
