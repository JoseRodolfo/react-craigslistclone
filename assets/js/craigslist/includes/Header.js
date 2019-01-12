import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render() {
    return (<header>
      <div className="left-menu">
        <div className="logo">
          Craigslist
        </div>

        <div className="city">
          San Francisco
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      <div className="right-menu">
        <div className="user-img">
          User image
        </div>

        <div className="user-dropdown">
          My Account
          <i className="fas fa-chevron-down"></i>
        </div>
        <button className="post-btn">
          Post to Classifieds
        </button>
      </div>
    </header>)
  }
}
