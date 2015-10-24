import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

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
        <CopyToClipboard text={copyText}
          onCopy={this.afterCopy.bind(this)}>
          <code className='property-code'>{copyText}</code>
        </CopyToClipboard>
        </td>
        <td><div style={style}>{text}</div></td>
      </tr>
    )
  }
}
export default Property;
