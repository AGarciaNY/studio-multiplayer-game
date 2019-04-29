import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js"; // mport CookieClicker from "./games/cookieClicker/CookieClicker.js";

export default class ClickableCookie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click_count: 0 };
  }
  handleClick() {
    var new_click_count = this.state.click_count + 1;
    this.setState({ click_count: new_click_count });
    this.getSessionDatabaseRef().set({
      player1: this.state.click_count
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.click_count}</p>
        <img
          src="http://clipart-library.com/img1/1150804.png"
          onClick={() => this.handleClick()}
        />
      </div>
    );
  }
}
