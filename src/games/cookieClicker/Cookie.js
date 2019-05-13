import React from "react";

export default class ClickableCookie extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.score}</p>
        <img
          src="http://clipart-library.com/img1/1150804.png"
          onClick={this.props.clickHandler}
        />
      </div>
    );
  }
}
