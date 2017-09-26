import React, {Component} from 'react';

class CaffeSpec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caffeValue: 'Capuccino'
    };
  }



  render() {
    let caffeUnwrapped = this.props.caffeSpecList.map((item, idx) =>
      <option key={item} id={item} value={item}>{item}</option>
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
              <select name="" id="" onChange={this.props.updateSpec}>
                {caffeUnwrapped}
              </select>

            </div>
          )}

      </div>
    )
  }
}

CaffeSpec.propTypes = {
  // _saveCaffe: React.PropTypes.func.required
};

export default CaffeSpec