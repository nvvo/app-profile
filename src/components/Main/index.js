import React, {Component} from 'react';

import Feature from './components/Features';
import About from './components/About';
import Skill from './components/Skill';
import Resume from './components/Resume';
import Education from './components/Education';
import Testimonial from './components/Testimonial';
import Portifilio from './components/Portifilio';
import Contact from './components/Contact';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: './img/avatar.jpg',
      image_1: './img/img_1.jpg',
      image_2: './img/img_2.jpg',
      image_3: './img/img_3.jpg',
      image_4: './img/img_4.jpg',
      image_5: './img/img_5.jpg',
      image_6: './img/img_6.jpg',
    };
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
    );
  }
}
export default Main;
