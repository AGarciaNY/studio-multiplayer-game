import React from "react";

export default class ClickableCookie extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.score}</p>
        <img
          className="cookie"
          src="https://i.imgur.com/vX0ESqI.png"
          onClick={this.props.clickHandler}
        />
      </div>
    );
  }
}
