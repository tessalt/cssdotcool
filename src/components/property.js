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
    return (
      <tr>
        <td>
          <ReactZeroClipboard 
            text={this.props.example}
            onCopy={this.afterCopy.bind(this)}>
       <code className='property-code'>{this.props.cssName}: {this.props.example};</code>
          </ReactZeroClipboard>
        </td>
        <td><div style={style}>{text}</div></td>
      </tr>
    )
  }
}

export default Property;
