import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from "./emojipedia";

console.log(emojipedia.map((data) => data.meaning.substring(0, 100)));

ReactDOM.render(<App />, document.getElementById("root"));
