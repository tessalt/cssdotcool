import React from 'react';
import Property from './property';
import styles from '../styles';

class PropertyList extends React.Component {
  render() {
    let style = styles[this.props.params.style];
    let collection = style.examples.map(example => {
      return <Property example={example} name={style.property} defaultStyles={style.defaultStyles}/>
    });
    return (
      <div>
        {collection}
      </div>
    )
  }
}

export default PropertyList;
