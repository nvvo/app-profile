import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
        <div className="header">
          <div className="slider">
            <div className="container">
              <div className="intro">
                <h2>Web Developer Portfolio</h2>
                <button className="my-button" type="button" name="button"> Learn More</button>
              </div>
            </div>
          </div>
          <div className="navbar">
            <div className="container">
              <h2>Re<span>stom</span></h2>
              <ul>
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Resume</a></li>
                <li><a href="/">Testemonials</a></li>
                <li><a href="/">Portofolio</a></li>
                <li><a href="/">Contact Me</a></li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}
export default Header;