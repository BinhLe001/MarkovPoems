import React from "react";
import "./Explore.css";
import entireBookChain from "../chains/entireBookChain.json";
import part1Chain from "../chains/part1Chain.json";
import part2Chain from "../chains/part2Chain.json";
import part3Chain from "../chains/part3Chain.json";
import thresholdChain from "../chains/thresholdChain.json";

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: "",
      numWords: 50,
      currentPoem: ""
    };
  }

  onNumWordsChange = e => {
    this.setState({
      numWords: e.target.value
    });
  };

  onSelectionChanged = name => {
    this.setState({
      selectedSection: name
    });
  };

  generatePoem = count => {
    try {
      if (isNaN(count)) {
        alert("Please enter a valid number.");
      } else {
        if (this.state.selectedSection === "") {
          alert("Please select a section.");
        } else {
          let chain = entireBookChain;
          if (this.state.selectedSection === "Part I") {
            chain = part1Chain;
          }
          if (this.state.selectedSection === "Part II") {
            chain = part2Chain;
          }
          if (this.state.selectedSection === "Part III") {
            chain = part3Chain;
          }
          if (this.state.selectedSection === "Threshold") {
            chain = thresholdChain;
          }

          let word1 = Object.keys(chain)[
            Math.floor(Math.random() * Object.keys(chain).length)
          ];
          let message = word1.charAt(0).toUpperCase() + word1.slice(1);

          while (message.split(" ").length < count) {
            let word2 =
              chain[word1][
                Math.floor(Math.random() * Object.keys(chain[word1]).length)
              ];
            message += " " + word2;
            word1 = word2;
          }

          this.setState({
            currentPoem: message
          });
        }
      }
    } catch (error) {
      console.log(error);
      this.generatePoem(this.state.numWords);
    }
  };

  render() {
    let poemWords = this.state.currentPoem;
    if (this.state.currentPoem === "") {
      poemWords = (
        <div className="poem-info">
          Select parameters and click Generate Poem to get started...
        </div>
      );
    }

    return (
      <div className="Explore">
        <div className="Explore-title">
          Explore Markov Model Poem Generation Based on Vuong's Style
        </div>
        <div className="Explore-section">
          Section:
          <div className="Explore-selections">
            <div
              className={
                this.state.selectedSection === "Entire Book"
                  ? "selected"
                  : "selection"
              }
              onClick={() => this.onSelectionChanged("Entire Book")}
            >
              Entire Book
            </div>
            <div
              className={
                this.state.selectedSection === "Threshold"
                  ? "selected"
                  : "selection"
              }
              onClick={() => this.onSelectionChanged("Threshold")}
            >
              Threshold
            </div>
            <div
              className={
                this.state.selectedSection === "Part I"
                  ? "selected"
                  : "selection"
              }
              onClick={() => this.onSelectionChanged("Part I")}
            >
              Part I
            </div>
            <div
              className={
                this.state.selectedSection === "Part II"
                  ? "selected"
                  : "selection"
              }
              onClick={() => this.onSelectionChanged("Part II")}
            >
              Part II
            </div>
            <div
              className={
                this.state.selectedSection === "Part III"
                  ? "selected"
                  : "selection"
              }
              onClick={() => this.onSelectionChanged("Part III")}
            >
              Part III
            </div>
          </div>
        </div>
        <div className="Explore-words">
          <div className="Words-left">
            <div className="Words-label">Number of Words:</div>
            <input
              className="Words-input"
              value={this.state.numWords}
              onChange={e => this.onNumWordsChange(e)}
            />
          </div>
          <div
            className="Words-submit"
            onClick={() => this.generatePoem(this.state.numWords)}
          >
            Generate Poem
          </div>
        </div>
        <div className="Explore-poem">{poemWords}</div>
      </div>
    );
  }
}

export default Explore;
