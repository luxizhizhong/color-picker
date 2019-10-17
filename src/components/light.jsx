// create by @d1y
import React, { Component } from 'react'
import Colors from '../utils/colorui'
import { Button, Row, Col } from 'react-bootstrap'
import Tips from './tips'

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: Colors.list,
      index: 0,
      showTips: props.showTips
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showTips: nextProps.showTips
    })
  }

  toggleColor = (e,index)=> {
    // const showTips = true
    this.setState({ index })
    this.props.onChange(e)
  }

  render() {
    return (
      <div style={{
        minWidth: '92vw',
        maxWidth: '98vw',
        margin: '12px auto',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Tips say={ this.state.showTips } />
        <Row style={{
          width: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <Col>
            { this.state.list.map((item,index)=> (
              <div key={ index } style={{ 
                display: 'inline-block',
                width: '80px',
                margin: '8px 0',
                cursor: 'pointer'
              }}
              onClick={ ()=> this.toggleColor(item.col, index) }>
                <div style={{
                  display: 'inline-block',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: item.col,
                  border: this.state.index == index ? '4px solid #333' : '4px solid #fff',
                  transition: 'all .32s',
                  transform: '1.2'
                }}></div>
              </div>
            )) }
          </Col>
        </Row>
      </div>
    )
  }

}