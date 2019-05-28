import React from "react";
import "./cookie.css";

export default class GameOver extends React.Component {
  render() {
    if (this.props.winOrLoss === "You Win") {
      return (
        <div>
          <div>
            <p className="GOV">Game Over</p>
            <p className="WOR">{this.props.winOrLoss}</p>
          </div>
        </div>
      );
    } else if (this.props.winOrLoss === "You Lost") {
      return (
        <div>
          <div>
            <p className="GOV">Game Over</p>
            <p className="WOR">{this.props.winOrLoss}</p>
            <p>Better Luck Next time</p>
          </div>
        </div>
      );
    }
  }
}
