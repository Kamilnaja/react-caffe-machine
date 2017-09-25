import React, {Component} from 'react';

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
      enabled: true
    })
  }

  setEnabled () {
    const { enabled } = this.state;
    this.setState({
      enabled: true
    });
    this.someFn();
  }

  setDisabled() {
    const { enabled } = this.state;
    this.setState({
      enabled: false
    });
    this.someFn();
  }

  someFn = () => {
    this.props.callbackFromParent(this.state.enabled);
  };


  render () {
    return (
        <div>
          <hr/>
          <input type="radio" name="on" onClick={this.setEnabled} />Włącz
          <input type="radio" name="off" onClick={this.setDisabled} />Wyłącz
        </div>
    )
  }
}
export default OnOf;