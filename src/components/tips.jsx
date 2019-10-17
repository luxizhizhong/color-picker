// 提示

import React, { Component } from 'react';

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = {
      say: props.say
    }
  }

  pos = {
    transition: "opacity 0.1s ease 0s",
    zIndex: 2147483647,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    position: "fixed",
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'all .4s',
    pointerEvents: 'none'
  }

  bar = {
    padding: `6px 12px`,
    background: `#333`,
    color: `#fff`
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      say: nextProps.say
    })
  }

  coverTogo = ()=> {
    const time = 1200
    setTimeout(()=> {
      this.setState({
        say: false
      })
    }, time)
    return { height: `10%`, opacity: `1` }
  }

  render() {
    const cat = `已复制色值`, toSay = { height: `2%`, opacity: `0` }
    return (
      <div style={ this.pos }>
        <div style={ this.state.say ? this.coverTogo() : toSay }>
          <span style={ this.bar }>{ cat }</span>
        </div>
      </div>
    )
  }
}