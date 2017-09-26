import React, {Component} from 'react';

class CaffeInfo extends Component {
  render() {
    return (

      <div>
        <hr/>
        <p>
          Wybrana kawa to : {this.props.caffeValue}
        </p>
      </div>
    )
  }
}

export default CaffeInfo;