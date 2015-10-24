import React from 'react';
import ColorPicker from 'react-color-picker';
import CopyNotification from './copy-notification';
import CopyToClipboard from 'react-copy-to-clipboard';

class ColorPickerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#000000',
      showNotification: false,
    }
  }
  onDrag(color) {
    this.setState({
      color: color
    })
  }
  afterCopy() {
    this.setState({
      showNotification: true,
    });
    setTimeout(() => {
      this.setState({
        showNotification: false,
      });
    }, 1500);
  }
  render() {
    return (
      <div>
        <header>
          <h1 className='mt0'>Colour Picker</h1>
        </header>
        <div className="bg-white p2">
          <ColorPicker onDrag={this.onDrag.bind(this)} color={this.state.color}/>
          <div className="border current-color" style={{background: this.state.color}}>
          </div>
          <input type="text" value={this.state.color}  className="field inline-block mt1"/>
          <CopyToClipboard
            text={this.state.color}
            onCopy={this.afterCopy.bind(this)}>
            <button className="btn btn-primary inlie-block ml1 mt1 bg-purple">Copy</button>
          </CopyToClipboard>
          <CopyNotification show={this.state.showNotification} />
        </div>
      </div>
    )
  }
}
export default ColorPickerPage;
