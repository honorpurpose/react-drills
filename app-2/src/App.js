import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      favThings: ['Steffani', 'Brocolli', 'Everett', 'Book of Mormon']
    }
  }

  
  render() {
    let toDisplay = this.state.favThings.map((e, i) => {
      return <h2 key={i}> { e } </h2>
    })
    return (
      <div className="App">
        { toDisplay }
          
      </div>
    );
  }
}

export default App;
