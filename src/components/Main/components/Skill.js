import React, { Component } from 'react'

class Skill extends Component {
  render() {
    return (
      <div>
        <div className="my-skills">
            <div className="container">
                <div className="skills">
                <h2>My skills</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt Duis aute irure dolor in
                    reprehenderit .</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit .</p>
                <button type="button" className="my-button" name="button">Contact Me</button>
                </div>
                <div className="progress">
                <div className="technique">
                    <h3>Html / CSS</h3>
                    <div><span style={{width: '83%'}}>83% &nbsp;</span></div>
                </div>
                <div className="technique">
                    <h3>GRAPHIC DESIGN</h3>
                    <div><span style={{width: '88%'}}>88% &nbsp;</span></div>
                </div>
                <div className="technique">
                    <h3>Framework</h3>
                    <div><span style={{width: '75%'}}>75% &nbsp;</span></div>
                </div>
                <div className="technique">
                    <h3>Javascript</h3>
                    <div><span style={{width: '90%'}}>90% &nbsp;</span></div>
                </div>
                </div>
            </div>
            </div>
      </div>
    )
  }
}
export default Skill;
