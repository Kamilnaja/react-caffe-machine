import React, {Component} from 'react';

class CaffeSpec extends Component {
  render () {
    let caffeUnwrapped = this.props.caffeSpecList.map((item, idx) =>
      <div key={idx}>
        <input key={item} type="radio" id={item}/>
        <label key={idx} htmlFor={item}>{item}</label>
      </div>
    );

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
                {caffeUnwrapped}
            </div>
          )}

      </div>
    )
  }
}

export default CaffeSpec