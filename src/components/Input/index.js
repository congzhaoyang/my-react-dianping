import React from 'react'

class Input extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div>
        <input 
          style={{width: '100%', height: '40px', fontSize: '35px',border: '1px solid red', padding: '0 20px'}}
          value={this.state.value}
          onChange={this.changeHandler.bind(this)} 
          onKeyUp={this.keyUpHandler.bind(this)}
        />
      </div>
    )
  }

  changeHandler(e) {
    this.setState({value: e.target.value})
  }

  keyUpHandler(e) {
    const value = this.state.value
    if(e.keyCode === 13) {
      value.trim()
      this.props.submitFn(value)
      this.setState({value: ''})
    }
  }
}

export default Input