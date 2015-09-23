import React from 'react';
import Property from './property';
import styles from '../styles';

class PropertyList extends React.Component {
  render() {
    let style = styles[this.props.params.style];
    let collection = style.examples.map(example => {
      return <Property example={example} name={style.property} {...style}/>
    });
    return (
      <div>
        <header>
          <h1 className="mt0">{style.property}</h1>
        </header>
        <table>
          <tbody>
            {collection}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PropertyList;
