import React, {Component} from 'react';

class OnOf extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      enabled: false
    };
  }
  
  componentWillMount () {
    this.setState({
      enabled: true
    })
  }
  
  render () {
    return (
      <div className="radio-wrapper">
      <div>
        <input
        type="radio"
        name="trigger"
        onClick={this.props.updateOn} />
        <label>Włącz</label>
        </div>
        <div>
        <input
        type="radio"
        name="trigger"
        onClick={this.props.updateOf} />
        <label>Wyłącz</label>
      </div>
      </div>
    )
  }
}
export default OnOf;