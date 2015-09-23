import React from 'react';

class Property extends React.Component {
  render() {
    let style = Object.assign({}, this.props.defaultStyles, {
      [this.props.name]: this.props.example
    });
    let text = this.props.exampleText || "Example";
    return (
      <tr>
        <td><code>{this.props.example}</code></td>
        <td><div style={style}>{text}</div></td>
      </tr>
    )
  }
}

export default Property;
