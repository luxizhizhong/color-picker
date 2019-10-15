import React, { Component } from 'react';
import Button from 'react-bootstrap/button'
const btnStyl = {
  position: 'absolute',
  bottom: '6px',
  left: '8px',
  pointerEvents: "none",
  opacity: '.1'
}
export default class extends Component {

  constructor(props) {
    console.log(`props: `, props)
    super(props)
    this.state = {
      withHeight: '420px'
    }
  }

  render() {
    return (
      <div style={{
        position: "relative",
        width: '100vw',
        minHeight: this.state.withHeight,
        background: this.props.color
      }}>
        <Button variant="light" style={ btnStyl } className="text-black">
          { this.props.color }
        </Button>
      </div>
    )
  }

}