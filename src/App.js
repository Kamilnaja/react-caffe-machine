import React, { Component } from 'react';
import OnOf from './OnOf';
import CaffeInfo from "./CaffeInfo";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ekspress app</h1>
        <form>
          <OnOf/>
          <CaffeInfo
/>
        </form>
      </div>
    );
  }
}

export default App;
