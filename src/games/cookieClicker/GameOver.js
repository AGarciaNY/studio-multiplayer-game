import React from "react";
import "./cookie.css";

export default class GameOver extends React.Component {
  render() {
    if (this.props.startTimemin === 0 && this.props.startTimesec === 0) {
      return (
        <div>
          <div>
            <p>Game Over You</p>
            <p>{this.props.winOrLoss}</p>
          </div>
        </div>
      );
    }
  }
}
