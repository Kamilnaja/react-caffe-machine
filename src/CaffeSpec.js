import React, {Component} from 'react';

class CaffeSpec extends Component {
  render () {
    let caffeSpecList = ["Capuccino", "Latte", "Americano"];
    let caffeUnwrapped = caffeSpecList.map((item) => <li key={item}>{item}</li>);

    console.log(caffeUnwrapped);
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
              <ul>
                {caffeUnwrapped}
              </ul>
            </div>
          )}

      </div>
    )
  }
}

export default CaffeSpec