'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './index.less'
import logo from './logo.jpg'

class Search extends React.Component {
  render() {
    return (
      <div className="react-demo">
        React Demo deeeeooD
        <img src={logo} />
      </div>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))
