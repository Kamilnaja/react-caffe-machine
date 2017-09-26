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
        <div>
          <hr/>
          <input
            type="radio"
            name="trigger"
            onClick={this.props.updateOn} />Włącz
          <input
            type="radio"
            name="trigger"
            onClick={this.props.updateOf} />Wyłącz
        </div>
    )
  }
}
export default OnOf;