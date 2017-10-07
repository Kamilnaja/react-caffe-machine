import React, {Component} from 'react';

class StartCaffe extends Component {
  makeCaffe () {
    console.log("robi się ")
  }
  render () {
    return (
      
      <div>
      {
        this.props.enabled && 
          <button onClick={this.makeCaffe}>Zrób kawę</button>
      }
        
      </div>
    ) 
  }
}

export default StartCaffe