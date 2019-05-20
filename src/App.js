import React from "react";
import "./App.css";
import Visualize from "./views/Visualize";
import Explore from "./views/Explore";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          Computational Text Analysis: Night Sky With Exit Wounds by Ocean Vuong
        </div>
        <div className="App-body">
          <div className="App-view">
            <Visualize />
          </div>
          <div className="App-view">
            <Explore />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
