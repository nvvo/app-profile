import React, { Component } from 'react'

class Portifilio extends Component {
  render() {
    return (
      <div>
        <div className="portfolio">
            <div className="container">
                <h2 className="he">Portfolio</h2>
                <p className="paragrph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit. </p>
                <div className="our-work">
                <div><img src={this.props.imageSrc1} alt="Test" /></div>
                <div><img src={this.props.imageSrc2}alt="Test" /></div>
                <div><img src={this.props.imageSrc3} alt="Test" /></div>
                <div><img src={this.props.imageSrc4} alt="Test" /></div>
                <div><img src={this.props.imageSrc5} alt="Test" /></div>
                <div><img src={this.props.imageSrc6} alt="Test" /></div>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}
export default Portifilio;
