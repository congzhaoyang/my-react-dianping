import React, { Component } from 'react'
import './helle.scss'

class Hello extends Component {
  render() {
    // 注释
    var temp = 0
    return(
      <div className='Hello'>
        <h1 className="title1">hello, this is my first react component</h1>
        <p>{/* temp ? temp : 'not 100' */}</p>
      </div>
    )
  }
}

export default Hello