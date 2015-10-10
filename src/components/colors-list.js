import colors from '../data/colors';
import PropertyList from './property-list';
import React from 'react';

class ColorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: 'color'
    }
  }
  toggleProp(propName) {
    this.setState({
      property: propName
    })
  }
  render() {
    let style = {
      color: {
        title: 'Colors',
        property: 'color',
        cssName: 'color',
        examples: colors
      },
      backgroundColor: {
        title: 'Background Colors',
        property: 'backgroundColor',
        cssName: 'background-color',
        examples: colors
      }
    }
    let BTN_STYLES = 'mr1 btn btn-primary white bg-purple'
    let buttons = Object.keys(style).map(propName => {
      let active = this.state.property === propName ? '' : 'muted';
      return (
        <button
          onClick={this.toggleProp.bind(this, style[propName].property)}
          className={`${BTN_STYLES} ${active}`}>
          {style[propName].title}
        </button>)
    })
    return (
      <div>
        <div className='switch-btns'>{buttons}</div>
        <PropertyList style={style[this.state.property]} />
      </div>
    )
  }
}

export default ColorsList;
