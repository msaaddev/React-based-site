import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../src/components/nav";
import Article1 from "./components/article1";
import Article2 from "./components/article2";
import Footer from "./components/footer";


ReactDOM.render(<Header />, document.getElementById("root"));
ReactDOM.render(<Article1/>, document.getElementById("article1"));
ReactDOM.render(<Article2/>, document.getElementById("article2"));
ReactDOM.render(<Footer/>, document.getElementById("footer"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
