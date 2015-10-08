import React from 'react';
import ReactZeroClipboard from 'react-zeroclipboard';

class Property extends React.Component {
  afterCopy() {
    this.props.afterCopy();
  }
  render() {
    let style = Object.assign({}, this.props.defaultStyles, {
      [this.props.name]: this.props.example
    });
    let text = this.props.exampleText || "Example";
    let copyText = `${this.props.cssName}: ${this.props.example};`;
    return (
      <tr>
        <td>
          <ReactZeroClipboard
            text={copyText}
            onAfterCopy={this.afterCopy.bind(this)}>
              <code className='property-code'>{copyText}</code>
          </ReactZeroClipboard>
        </td>
        <td><div style={style}>{text}</div></td>
      </tr>
    )
  }
}

export default Property;
