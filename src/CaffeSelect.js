import React, {Component } from 'react';

class CaffeSelect extends Component {

  render () {
    const caffeUnwrapped = this.props.caffeSpecList.map((item, idx) =>
    <option key={item} id={item} value={item}>{item}</option>
  );
    return (
      <div>
        <select name="" id="" onChange={this.props.updateCaffeValue}>
        {caffeUnwrapped}
        </select>
      </div>
    )
  }
}

export default CaffeSelect