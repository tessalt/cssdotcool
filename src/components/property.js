import React from 'react';

class Property extends React.Component {
  render() {
    return (
      <div className="code">
        <code>
          {this.props.example}
        </code>
      </div>
    )
  }
}

export default Property;
