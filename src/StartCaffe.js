import React, {Component} from 'react';

class StartCaffe extends Component {
  render () {
    return (
      
      <div>
      {
        this.props.enabled && 
          <button>Zrób kawę</button>
      }
        
      </div>
    ) 
  }
}

export default StartCaffe