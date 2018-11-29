import React, {Component} from 'react';
import {Hobbies} from './Hobbies';

const description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis
    aute irure dolor in reprehenderit`;
const hobbies = [
  {
    name: 'Web Design',
    icon: 'fa-paint-brush',
    description: description,
  },
  {
    name: 'Marketing',
    icon: 'fa-users',
    description: description,
  },
  {
    name: 'Graphic Design',
    icon: 'fa-magic',
    description: description,
  },
  {
    name: 'SEO',
    icon: 'fa-line-chart',
    description: description,
  },
];

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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute
                irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod
                tempor incididunt Duis aute irure dolor in reprehenderit .
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute
                irure dolor in reprehenderit .
              </p>
              <Hobbies hobbies={hobbies} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
