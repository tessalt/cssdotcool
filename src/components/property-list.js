import React from 'react';
import Property from './property';

class PropertyList extends React.Component {
  render() {
    let collection = this.props.collection.examples.map(example => {
      return <Property example={example} name={this.props.collection.property} defaultStyles={this.props.collection.defaultStyles}/>
    });
    return (
      <div>
        {collection}
      </div>
    )
  }
}

export default PropertyList;
