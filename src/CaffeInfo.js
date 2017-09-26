import React, {Component} from 'react';

class CaffeInfo extends Component {
  render() {
    return (

      <div>
      {
        this.props.enabled && 
        <p>Wybrana kawa to : {this.props.caffeValue}</p>
      }
        <hr/>
        
      </div>
    )
  }
}

export default CaffeInfo;