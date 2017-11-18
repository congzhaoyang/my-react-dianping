import React from 'react'

import Header from '../../components/Header'

class Hello extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      now: Date.now
    }
  }

  render() {
    return (
      <div>
        <Header title="学些react"/>
        <p onClick={this.clickHandler.bind(this)}>hello world, {this.state.now}</p>
      </div>
    )
  }

  clickHandler() {
    this.setState({
      now: Date.now()
    })
  }
}

export default Hello