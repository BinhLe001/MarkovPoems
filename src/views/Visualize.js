import React from "react";
import "./Visualize.css";

class Visualize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSection: "",
      selectedLength: ""
    };
  }

  onLengthChanged = length => {
    this.setState({
      selectedLength: length
    });
  };

  onSelectionChanged = name => {
    this.setState({
      selectedSection: name
    });
  };

  render() {
    let plotContent;
    let plotName;
    if (this.state.selectedLength === "" || this.state.selectedSection === "") {
      plotContent = (
        <div className="Visualize-info">Select parameters to show plot...</div>
      );
    } else {
      if (this.state.selectedLength === "All Lengths") {
        if (this.state.selectedSection === "Entire Book") {
          plotName = "BookFreq.png";
        }
        if (this.state.selectedSection === "Threshold") {
          plotName = "ThresholdFreq.png";
        }
        if (this.state.selectedSection === "Part I") {
          plotName = "Part1Freq.png";
        }
        if (this.state.selectedSection === "Part II") {
          plotName = "Part2Freq.png";
        }
        if (this.state.selectedSection === "Part III") {
          plotName = "Part3Freq.png";
        }
      } else if (this.state.selectedLength === "At Least 5") {
        if (this.state.selectedSection === "Entire Book") {
          plotName = "BookLengthFreq.png";
        }
        if (this.state.selectedSection === "Threshold") {
          plotName = "ThresholdLengthFreq.png";
        }
        if (this.state.selectedSection === "Part I") {
          plotName = "Part1LengthFreq.png";
        }
        if (this.state.selectedSection === "Part II") {
          plotName = "Part2LengthFreq.png";
        }
        if (this.state.selectedSection === "Part III") {
          plotName = "Part3LengthFreq.png";
        }
      }
      plotContent = (
        <img
          src={plotName}
          className="Visualize-plot"
          alt="plot of word frequencies"
        />
      );
    }

    return (
      <div className="Visualize">
        <div className="Visualize-title">
          Visualize the Most Frequently Used Words throughout the Book
        </div>
        <div className="Visualize-section">
          Section:
          <div className="Visualize-selections">
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
        <div className="Visualize-parameter">
          Word Length:
          <div className="Visualize-lengths">
            <div
              className={
                this.state.selectedLength === "All Lengths"
                  ? "selected"
                  : "selection"
              }
              onClick={() => this.onLengthChanged("All Lengths")}
            >
              All Lengths
            </div>
            <div
              className={
                this.state.selectedLength === "At Least 5"
                  ? "selected"
                  : "selection"
              }
              onClick={() => this.onLengthChanged("At Least 5")}
            >
              At Least 5 Letters
            </div>
          </div>
        </div>
        <div className="Visualize-bottom">{plotContent}</div>
      </div>
    );
  }
}

export default Visualize;
