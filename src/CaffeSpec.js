import React, {Component} from 'react';

class CaffeSpec extends Component {
  render () {
    return (
      <div className="caffeSpec">
        {
          this.props.enabled === false && (
          <div>
            <h2>Ekspress wyłączony</h2>
          </div>
        )}

        {
          this.props.enabled && (
            <div>
              <h2>Ekspress włączony</h2>
              <h2>Wybierz rodzaj kawy</h2>
              <input type="radio" name="caffeSpec" id=""/>Cappuccino
              <input type="radio" name="caffeSpec" id=""/>Latte
              <input type="radio" name="caffeSpec" id=""/>Americano
            </div>
          )}

      </div>
    )
  }
}

export default CaffeSpec