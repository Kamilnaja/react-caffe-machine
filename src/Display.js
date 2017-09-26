import React, {Component} from 'react';
import CaffeInfo from './CaffeInfo';
class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caffeValue: 'Capuccino'
    };
  }
  
  render() {
  return (
    <div className="display">
    
    {
      this.props.enabled && (
        <div>
          <h2>Ekspress włączony</h2>
          <CaffeInfo
            enabled={this.state.enabled}
            caffeValue={this.state.caffeValue}
        />
        <h2>Wybierz rodzaj kawy</h2>
        {
          !this.props.caffeValue && (
            <p>. . . </p>
          )
        }
        <p>{this.props.caffeValue}</p>
        </div>
      )}
      </div>
    )
  }
}

Display.propTypes = {
  // _saveCaffe: React.PropTypes.func.required
};

export default Display