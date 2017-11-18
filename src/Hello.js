import React, { Component } from 'react'
import './helle.scss'

class Hello extends Component {
  render() {
    // 注释
    var temp = 0
    var arr = [1, 2, 3]
    return(
      <div className='Hello'>
        <h1 className="title1">hello, this is my first react component</h1>
        <time>{Date.now().toExponential()}</time>
        <p onClick={ this.hander.bind(this) }>{temp ? temp : 'not 100'}</p>
        <ul>
          {
            arr.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }

  hander(e) {
    e.preventDefault()
    console.log(this.hander)
  }
}

export default Hello