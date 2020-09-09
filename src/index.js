import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
export const BASE_URL = 'https://api.nasa.gov/planetary/apod?api'
export const API_KEY = 'vGY44wjPJLxq81Reoir763xgiIFftjxKzqrTl9Wf'

ReactDOM.render(<App />, document.getElementById("root"));
