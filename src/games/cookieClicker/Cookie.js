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
        <audio id="myAudio" autoplay loop>
          <source src="./win.mp3" type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}
