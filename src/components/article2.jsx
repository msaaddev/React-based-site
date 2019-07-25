import React, { Component } from "react";

class Article2 extends Component {
  state = {
    imageURL:
      "https://raw.githubusercontent.com/msaaddev/Unresponsive-Design-HTML-CSS/master/resources/Artificial-Intelligence.jpg",
    imageURL2:
      "https://raw.githubusercontent.com/msaaddev/Unresponsive-Design-HTML-CSS/master/resources/picture.png"
  };

  main = {
    width: "100%",
    margin: "0",
    padding: "0"
  };

  space = {
    height: "50px"
  };

  cover = {
    width: "1000px",
    height: "350px",
    borderRadius: "1%"
  };

  blog = {
    textAlign: "center"
  };

  heading = {
    color: "#404040",
    fontSize: "30px",
    textAlign: "left",
    marginLeft: "285px",
    width: "100%",
    fontWeight: "600",
    marginBottom: "20px",
    paddingTop: "20px"
  };

  intro = {
    width: "57%",
    display: "inline-block",
    textAlign: "center"
  };

  me = {
    width: "4%",
    borderRadius: "50%",
    display: "inline",
    float: "left"
  };

  name = {
    textAlign: "left",
    paddingLeft: "50px",
    margin: "0",
    fontSize: "20px",
    fontWeight: "400"
  };

  para = {
    textAlign: "left",
    fontSize: "20px",
    lineHeight: "35px",
    color: "#404040",
    textIndent: "0"
  };

  separator = {
    width: "50%",
    opacity: "1",
    marginTop: "1%"
  };

  render() {
    return (
      <div style={this.main}>
        <div style={this.space} />
        <article style={this.blog}>
          <a href="https://msaad.me/artificial-intelligence/">
            <img
              src={this.state.imageURL}
              alt="dawn on mars"
              style={this.cover}
            />
          </a>
          <a href="https://msaad.me/artificial-intelligence/">
            <p style={this.heading}>
              {" "}
              💻 Artificial Intelligence – Savior or Destroyer
            </p>
          </a>
          <div style={this.intro}>
            <img src={this.state.imageURL2} style={this.me} alt="Saad" />
            <p style={this.name}>Saad</p>
            <p style={this.para}>
              In 21st century, artificial intelligence is playing a crucial role
              in our lives. Not only it helps us in our everyday tasks, but also
              in managing businesses on a huge scale. Companies like AlBrain,
              Amazon, Anki and many more are developing new AI tools for the
              world. Since the birth of the first computer, mankind […]
            </p>
          </div>
          <hr style={this.separator} />
        </article>
      </div>
    );
  }
}

export default Article2;
