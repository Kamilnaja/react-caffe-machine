import React, {Component} from 'react';

class CaffeSpec extends Component {
  render () {
    return (
      <div className="caffeSpec">
        {
          !this.props.enabled && (
          <div>
            <h2>Ekspress wyłączony</h2>
          </div>
        )}

        {
          this.props.enabled && (
            <div>
              <h2>Ekspress włączony</h2>
              <h2>Wybierz rodzaj kawy</h2>
              {/* todo - po wybraniu, ustaw w caffeinfo */}
              {/*wyślij do rodzica i z rodzica do trzeciego elementu */}
              <input type="radio" name="caffeSpec" id="cappuccino"/>Cappuccino
              <input type="radio" name="caffeSpec" id="latte"/>Latte
              <input type="radio" name="caffeSpec" id="americano"/>Americano
            </div>
          )}

      </div>
    )
  }
}

export default CaffeSpec