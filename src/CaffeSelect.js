import React, {Component } from 'react';

class CaffeSelect extends Component {

  render () {
    const caffeUnwrapped = this.props.caffeSpecList.map((item, idx) =>
    <option key={item} id={item} value={item}>{item}</option>
  );
    return (
      <label className="choser">
        <select name="" id="" onChange={this.props.updateCaffeValue} className="options">
        {caffeUnwrapped}
        </select>
      </label>
    )
  }
}

export default CaffeSelect