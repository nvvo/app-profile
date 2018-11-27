import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <div className="about-me">
            <div className="containerB">
              <div className="image">
                <img src={this.props.avatar} alt="Test" />>
              </div>
              <div className="info">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt Duis aute irure dolor in
                  reprehenderit .</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit .</p>
                <div className="hobbies">
                  
                  <div className="content">
                  
                    <div className="icon">
                      <i className="fa fa-paint-brush fa-2x"></i>
                    </div>
                  
                    <div className="text">
                      <h3>Web Design</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit .</p>
                    </div>
                  
                  </div>
                

                  <div className="content">
                  
                    <div className="icon">
                      <i className="fa fa-users  fa-2x"></i>
                    </div>
                  
                    <div className="text">
                      <h3>Marketing</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit .</p>
                    </div>
                
                  </div>
                  
                  <div className="content">
                  
                    <div className="icon">
                      <i className="fa fa-magic fa-2x"></i>
                    </div>
                  
                    <div className="text">
                      <h3>Graphic Design</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit .</p>
                    </div>
                  </div>             
                  <div className="content">              
                    <div className="icon">
                      <i className="fa fa-line-chart fa-2x"></i>
                    </div>        
                    <div className="text">
                      <h3>Seo</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit .</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    )
  }
}
export default About;
