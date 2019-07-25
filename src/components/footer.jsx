import React, { Component } from "react";

class Footer extends Component {
  state = {};

  anchor = {
    textDecoration: "none",
    color: 'black',
  };

  footerPara = {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '500',
  }

  render() {
    return (
      <footer>
        <p style = {this.footerPara}>
          &copy;
          <a href="https://msaad.me" style={this.anchor}>
            Muhammad Saad
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
