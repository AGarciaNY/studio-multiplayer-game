import React from "react";
import "./cookie.css";

export default class GameOver extends React.Component {
  render() {
    if (this.props.winOrLoss === "You Win") {
      return (
        <div>
          <div>
            <p className="GOV">Game Over</p>
            <p className="WOR" id="youwon">
              {this.props.winOrLoss}
            </p>
          </div>
        </div>
      );
    } else if (this.props.winOrLoss === "You Lost") {
      return (
        <div>
          <div>
            <p className="GOV">Game Over</p>
            <p className="WOR" id="youlost">
              Better Luck Next time
            </p>
          </div>
        </div>
      );
    }
  }
}
