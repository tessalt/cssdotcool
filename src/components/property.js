import React from 'react';

class Property extends React.Component {
  render() {
    let style = Object.assign({}, this.props.defaultStyles, {
      [this.props.name]: this.props.example
    });
    return (
      <div>
        <div className="code">
          <code>
            {this.props.example}
          </code>
        </div>
        <div className="demo" style={style}>
          Example
        </div>
      </div>
    )
  }
}

export default Property;
