import React, {Component} from 'react';

export default class CaffeGlass extends Component {
  render () {
    return (
      <div>
      {
        this.props.caffeMaking && (
          <div className="glass">
          <p className={this.props.caffeValue}></p>
        </div>
        )
      }
      </div>
    ) 
  }
}