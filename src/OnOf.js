import React, {Component} from 'react';
import CaffeSpec from "./CaffeSpec";
class OnOf extends Component {
  constructor (props) {
    super(props);
    this.state = {
      enabled: false
    };
    this.setEnabled = this.setEnabled.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
  }

  componentWillMount () {
    this.setState({
      enabled: false
    })
  }

  setEnabled () {
    const { enabled } = this.state;
    this.setState({
      enabled: true
    })
  }

  setDisabled () {
    const { enabled } = this.state;
    this.setState({
      enabled: false
    })
  }
  render () {
    return (
        <div>
          <hr/>
          <input type="radio" name="on" onClick={this.setEnabled} />Włącz
          <input type="radio" name="on" onClick={this.setDisabled} />Wyłącz

          <CaffeSpec  enabled={this.state.enabled}/>
        </div>
    )
  }
}
//todo - schowaj wszystko, jeśli wyłączony
export default OnOf;