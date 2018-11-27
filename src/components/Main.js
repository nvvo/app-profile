import React, { Component } from 'react';

import Feature from './maincontent/Features';
import About from './maincontent/About';
import Skill from './maincontent/Skill';
import Resume from './maincontent/Resume';
import Education from './maincontent/Education';
import Testimonial from './maincontent/Testimonial';
import Portifilio from './maincontent/Portifilio';
import Contact from './maincontent/Contact';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      avatar: './img/avatar.jpg',
      image_1 : './img/img_1.jpg',
      image_2 : './img/img_2.jpg',
      image_3 : './img/img_3.jpg',
      image_4 : './img/img_4.jpg',
      image_5 : './img/img_5.jpg',
      image_6 : './img/img_6.jpg',
    }
  }
  render() {
    return (
        <div>
          <Feature />
          <About avatar={this.state.avatar} />
          <Skill />
          <Resume />
          <Education />
          <Testimonial />
          <Portifilio
            imageSrc1={this.state.image_1}
            imageSrc2={this.state.image_2}
            imageSrc3={this.state.image_3}
            imageSrc4={this.state.image_4}
            imageSrc5={this.state.image_5}
            imageSrc6={this.state.image_6}
          />
          <Contact />
        </div>
    )
  }
}
export default Main;