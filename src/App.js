import React from 'react';
import Footer from './components/footer'
import Bg from './components/bg'
import Light from './components/light'
import { PhotoshopPicker } from 'react-color'
import PickerStyle from './utils/picker'
import Copytext from 'copy-to-clipboard'
export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '#666',
      PickerStyle,
      show: false
    }
  }

  handleChangeComplete = (color) => {
    this.setState({ 
      backgroundColor: color.hex,
      show: false
    });
  };

  moveToPicker = e=> {
    // TODO: bar 移动
  }

  copy = e=> {
    this.setState({ show: true })
    Copytext(e)
  }

  changeCol = e=> {
    this.handleChangeComplete({ hex: e })
  }

  render() {
    return (
      <div>
        <Bg color={ this.state.backgroundColor } />
        <div style={ PickerStyle }>
          <div onClick={ this.moveToPicker } className="bar"></div>
          <PhotoshopPicker
            color={ this.state.backgroundColor }
            onChangeComplete={ this.handleChangeComplete }
          />
        </div>
        <h1 onClick={ e=> { this.copy(this.state.backgroundColor) } } style={{ 
          textAlign: 'center',
          background: 'rgba(0,0,0,.1)',
          cursor: 'pointer'
        }}>{ this.state.backgroundColor } </h1>
        <Light showTips={ this.state.show } onChange={ this.changeCol } />
        <Footer />
      </div>
    )
  }

}