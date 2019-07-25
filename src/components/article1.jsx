import React, { Component } from "react";

class Article1 extends Component {
  state = {
    imageURL:
      "https://raw.githubusercontent.com/msaaddev/Unresponsive-Design-HTML-CSS/master/resources/Dawn%20on%20Mars.jpg",
    imageURL2:
      "https://raw.githubusercontent.com/msaaddev/Unresponsive-Design-HTML-CSS/master/resources/picture.png"

  };

  main = {
    width: '100%',
    margin: '0',
    padding: '0',
  }

  space = {
    height: '50px',
  }

  cover = {
    width: '1000px',
    height: '350px',
    borderRadius: '1%',
  }

  blog = {
    textAlign: 'center',
  }

  heading = {
    color: '#404040',
    fontSize: '30px',
    textAlign: 'left',
    marginLeft: '285px',
    width: '100%',
    fontWeight: '600',
    marginBottom: '20px',
    paddingTop: '20px',
  }

  intro = {
    width: '57%',
    display: 'inline-block',
    textAlign: 'center',
  }

  me = {
    width: '4%',
    borderRadius: '50%',
    display: 'inline',
    float: 'left',
  }

  name = {
    textAlign: 'left',
    paddingLeft: '50px',
    margin: '0',
    fontSize: '20px',
    fontWeight: '400',
  }

  para = {
    textAlign: 'left',
    fontSize: '20px',
    lineHeight: '35px',
    color: '#404040',
    textIndent: '0',
  }

  separator = {
    width: '50%',
    opacity: '1',
    marginTop: '1%',
  }

  render() {
    return (
        <div style = {this.main}>
        <div style = {this.space}></div>
          <article style = {this.blog}>
            <a href="https://msaad.me/2018-year-in-review/">
              <img src={this.state.imageURL} alt="dawn on mars" style = {this.cover} />
            </a>
            <a href="https://msaad.me/2018-year-in-review/">
              <p style = {this.heading}>🎥👨🏻‍💼 2018 – Year in Review</p>
            </a>
            <div style = {this.intro} >
                <img src={this.state.imageURL2} style = {this.me} alt="image"></img>
                <p style = {this.name}>Saad</p>
                <p style = {this.para}>👋 Hey there! As you might have known by now, my name is Muhammad Saad. I am a college
                    freshman who is following his passion of becoming an acknowledged Computer Scientist. Two things you should know
                    about me before reading any further. It is my 2nd article so don’t expect much 🤷‍♂️.</p>
            </div>
            <hr style = {this.separator}></hr>
          </article>
      </div>
    );
  }
}

export default Article1;
