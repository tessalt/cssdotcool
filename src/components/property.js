import React from 'react';

class Property extends React.Component {
  render() {
    let style = Object.assign({}, this.props.defaultStyles, {
      [this.props.name]: this.props.example
    });
    let text = this.props.exampleText || "Example";
    return (
      <div className="clearfix mb2">
        <div className="col col-5 code">
          <code className="h5">
            {this.props.example}
          </code>
        </div>
        <div className="col col-7 demo" style={style}>
          {text}
        </div>
      </div>
    )
  }
}

export default Property;
