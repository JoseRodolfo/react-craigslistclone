import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  loopCategories() {
    let testArray = [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ];
    return testArray.map((item, i) => {
      return (

        <div className="categories" key={i}>
        <div className="title">Community</div>
      <div className="link-section">
        <div className="link-section-left">
          <a href="#" className="link">Activities</a>
          <a href="#" className="link">Classes</a>
          <a href="#" className="link">Childcare</a>
          <a href="#" className="link">Events</a>
          <a href="#" className="link">Groups</a>
        </div>
        <div className="link-section-right">
          <a href="#" className="link">Pets</a>
          <a href="#" className="link">Politics</a>
          <a href="#" className="link">Rants</a>
          <a href="#" className="link">Rideshare</a>
          <a href="#" className="link">Volunteer</a>
        </div>
      </div>
    </div>)
    })
  }

  loopTag() {
    let tagArray = [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ];
    return tagArray.map((item, i) => {
      return (<div key={i} className="tag">Apple Computers</div>)
    })
  }

  render() {
    return (<div className="content home">
      <div className="container">
        <h1>Connecting people
          <br/>
          Everywhere!</h1>
        <section className="links">
          {this.loopCategories()}
        </section>
        <section className="trending">
          <input type="text" name="search" className="search"/>
          <div className="trend-title">Trending Now
            <i className="far fa-clock"></i>
          </div>
          <div className="tags">
            {this.loopTag()}
          </div>
        </section>
      </div>
    </div>)
  }
}
