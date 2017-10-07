import React, {Component} from 'react';

export default class CaffeGlass extends Component {
  render () {
    return (
      <div className="glass-wrapper">
      {
        this.props.caffeMaking && (
          <div>
          {
            this.props.enabled && (
              <div className="glass">
              <p className={this.props.caffeValue}></p>
              </div>
            )
          }
        </div>
        )
      }
      </div>
    ) 
  }
}