import React from 'react';
import Property from './property';

class PropertyList extends React.Component {
  render() {
    let collection = this.props.collection.map(example => {
      return <Property example={example}/>
    });
    return (
      <div>
        {collection}
      </div>
    )
  }
}

export default PropertyList;
