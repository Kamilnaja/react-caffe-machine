import React, {Component} from 'react';

class StartCaffe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      makingCoffe: false
    }
  }

  render () {
    return (
      <div>
      {
        this.props.enabled && 
          <button onClick={this.props.caffeMaking} className="btn-start">Zrób kawę</button>
      }
      </div>
    ) 
  }
}

export default StartCaffe