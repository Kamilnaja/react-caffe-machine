import React, {Component} from 'react';

class Display extends Component {
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
      <div class="display-wrapper">
      <div className="display">

        {
          this.props.enabled && (
            <div>
              <h2>Ekspress włączony</h2>
              <h2>Wybierz rodzaj kawy</h2>
            </div>
          )}
      </div>
      
      <select name="" id="" onChange={this.props.updateSpec}>
        {caffeUnwrapped}
      </select>
      </div>
    )
  }
}

Display.propTypes = {
  // _saveCaffe: React.PropTypes.func.required
};

export default Display