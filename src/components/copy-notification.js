import React from 'react';

class CopyNotification extends React.Component {
  render() {
    let classN = this.props.show ? 'js-is-active': '';
    return (
      <div className={`inline-block notification p1 bg-orange ${classN}`}>
        <p className='mb0'>Copied to clipboard!</p>
      </div>
    )
  }
}

export default CopyNotification;
