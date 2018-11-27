import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
            <div className="container">
                <div className="footer-folat">
                <span className="he">Copyright &copy; 2017 Restom</span>
                <ul>
                <li><a href="https://www.linkedin.com/in/youssef-restom-83491621"><i className="fa fa-fw fa-linkedin"></i></a></li>
                <li><a href="https://github.com/yrestom"><i className="fa fa-fw fa-github"></i></a></li>
                <li><a href="https://twitter.com/yousefrestom"><i className="fa fa-fw fa-twitter"></i></a></li>
                <li><a href="mailto:youssef.restom@gmail.com" title="My E-mail"><i className="fa fa-fw fa-envelope"></i></a></li>
                </ul>
                </div>
                <div className="footer-float">
                <div className="bigThink">
                <h4 className="he">Big thanks to</h4>
                <a href="http://elzero.org/">Elzero Web School</a>
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Footer;
