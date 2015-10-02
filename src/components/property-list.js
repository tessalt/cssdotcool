import React from 'react';
import Property from './property';
import styles from '../styles';
import CopyNotification from './copy-notification';

class PropertyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showNotification: false
    };
  }
  afterPropCopy() {
    this.setState({
      showNotification: true
    });
    setTimeout(() => {
      this.setState({
        showNotification: false
      })
    }, 1500);
  }
  render() {
    let style = styles[this.props.params.style];
    let collection = style.examples.map(example => {
      return <Property 
                afterCopy={this.afterPropCopy.bind(this)} 
                key={example} 
                example={example} 
                name={style.property} 
                {...style}/>
    });
    return (
      <div>
        <header>
          <h1 className="mt0">{style.title}</h1>
        </header>
        <table>
          <tbody>
            {collection}
          </tbody>
        </table>
        <CopyNotification show={this.state.showNotification} />
      </div>
    )
  }
}

export default PropertyList;
