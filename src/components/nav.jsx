import React, { Component } from "react";

class Header extends Component {
  state = {
    imageURL:
      "https://raw.githubusercontent.com/msaaddev/Unresponsive-Design-HTML-CSS/master/resources/picture.png"
  };

  head = {
    background: "#4020DF",
    height: "80px",
    margin: "0px"
  };

  image = {
    width: '4%',
    borderRadius: '50%',
    margin: '10px 10px 10px 25px',
    float: 'left',
  }

  logoText = {
    fontSize: '1.6em',
    display: 'inline-block',
    color: 'aliceblue',
    margin: '22px 10px 10px 15px',
  }

  line = {
    fontWeight: '400',
    fontSize: '17px',
  }

  logoText2 = {
    fontSize: '1.4em',
    display: 'inline',
    color: 'aliceblue',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    margin: '26px 10px 10px 15px',
    float: 'right',
  }



  render() {

    return (
      <header style={this.head}>
        <a href="https://msaad.me" title="my site">
          <img style = {this.image} src={this.state.imageURL} alt="saad" />
        </a>
        <p style = { this.logoText}>
          <b>Saad</b> | &nbsp;
          <span style = {this.line}>Web Developer, Computer Scientist</span>
        </p>
        <a
          href="https://msaad.me/contact-me/"
          style = {this.logoText2}
          title="contact"
        >
          Contact Me
        </a>
        <a href="https://msaad.me/about/" style = {this.logoText2} title="about">
          About
        </a>
      </header>
    );
  }
}

export default Header;
