import React from 'react';
import Footer from './components/footer'
import Bg from './components/bg'
import { PhotoshopPicker } from 'react-color';
import PickerStyle from './utils/picker'
export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '#666',
      PickerStyle
    }
  }

  handleChangeComplete = (color) => {
    this.setState({ backgroundColor: color.hex });
  };

  moveToPicker = e=> {
    // TODO: bar 移动
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
        <Footer />
      </div>
    )
  }

}