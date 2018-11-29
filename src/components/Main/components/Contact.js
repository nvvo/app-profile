import React, { Component } from 'react'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        message: '',
        contact: 'Contact Me',
    }
  }
  handleChange = (e) => {
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <div className="contact-me">
            <div className="container">
                <div className="info">
                <h2>Contact Me</h2>
                <p className="paragrph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit. </p>
                <address className="paragrph">
                    123 Street Name <br />
                    Istunbul <br />
                    Areena Area <br />
                </address>
                <p className="paragrph">
                    <strong>Email:</strong> me@mail.com <br />
                    <strong>Phone:</strong> +905123456789
                </p>
                </div>
                <form className="form">
                <label>Name *</label>
                <input type="text" name="Name" value={this.state.name} onChange={this.handleChange}/>
                <label>Email Adress *</label>
                <input type="email" name="Email Adress" value={this.state.email} onChange={this.handleChange}/>
                <label>Message *</label>
                <textarea name="Message" rows="10" cols="80" value={this.state.message} onChange={this.handleChange}>Your Message</textarea>
                <input type="submit" name="Contact Me" value={this.state.contact} onChange={this.handleChange}/>
                </form>
            </div>
          </div>
      </div>
    )
  }
}
export default Contact;
