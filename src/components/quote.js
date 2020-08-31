import React, { Component } from "react";
import axios from "axios";
import { FaTwitterSquare } from "react-icons/fa";
import "./App.css";
import {Animated} from "react-animated-css";

class qouteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      bgColor: "#f99192",
      clickCount: 0,
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote = () => {
    this.getQuote();
    this.changeColor();
  };

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    axios
      .get(
        "https://gist.githubusercontent.com/derlyvivianamurcia/e91faf2efe718348b50e7cabf80d99f9/raw/e438bdee7c98a2ad7d27748a7b41329f53567e0f/fquote"
      )
      .then((response) => {
        let data = response.data.quotes;
        let number = Math.floor(Math.random() * 100);
        let randomQuote = data[number];

        this.setState({
          quote: randomQuote["quote"],
          author: randomQuote["author"],
        });
      });
  }

  changeColor = () => {
    const color = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857"
    ];
    let i = this.state.clickCount;

    this.setState({
      clickCount: this.state.clickCount + 1,
    });

    if (i < 7) {
      this.setState({
        bgColor: color[i],
      });
    } else if (i >= 7) {
      this.setState({
        bgColor: color[i],
        clickCount: 0,
      });
    } else if (i === 0) {
      this.setState({
        clickCount: this.state.clickCount + 1,
        bgColor: color[i],
      });
    }
  };

  render() {
    return (
      

      <div className="padre"id="main">
        
        <style>
          {`
            :root {
              --main-bg-color: ${this.state.bgColor};
              --main-txt-color: ${this.state.bgColor};
              }
            `}
        </style>
        
        <div className="App text center" id="quote-box">
          <h1 id="text">{`"${this.state.quote}"`}</h1>
          <h5
            id="author"
            className="d-flex justify-content-end"
          >{`---${this.state.author}`}</h5>
          <div id="buttons">
            <a
              id="tweet-quote"
              className="rounded-lg width"
              href={`https://twitter.com/intent/tweet?text=${this.state.quote} ${this.state.author}`}
              target="_blank"
              title="Post this quote on twitter!"
            >
              <span>
                <i className="twitter-icon ">
                  <FaTwitterSquare />
                </i>
              </span>
            </a>
            <Animated zoomInUp>
            <button
              id="new-quote"
              className="button"
              onClick={this.getNewQuote}
            >
              NEW QUOTE
            
            </button>
            </Animated>
          </div>
        </div>
      </div>
      
    );
  }
}

export default qouteMachine;
