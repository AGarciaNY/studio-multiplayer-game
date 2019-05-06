import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js";
import Scorebored from "./Scorebored.js";
import Cookie from "./Cookie.js";
export default class CookieClicker extends GameComponent {
  constructor(props) {
    super(props);
    this.getSessionDatabaseRef().update({
      hostScore: 0,
      guestScore: 0,
      hasGameStarted: false
    });
  }

  onSessionDataChanged(data) {
    this.setState({
      hostScore: data.hostScore,
      guestScore: data.guestScore,
      hasGameStarted: data.hasGameStarted,
      timeleft: data.timeleft,
      startTime: data.startTime
    });
  }

  updateScore() {
    if (this.getSessionCreatorUserId() === this.getMyUserId()) {
      this.getSessionDatabaseRef().update({
        hostScore: this.state.hostScore + 1
      });
    } else {
      this.getSessionDatabaseRef().update({
        guestScore: this.state.guestScore + 1
      });
    }
  }

  winningOrLosing() {
    if (playerOnePoints > playerTwoPoints) {
      var winner = playerOne;
    } else if ((playerOnePoints = playerTwoPoints)) {
      var winner = null;
    } else {
      var winner = PlayerTwo;
    }
  }

  startGame(time) {
    var startTime = newDate();
    startTime.setSeconds(startTime.getSeconds + 10);
    this.getSessionDatabaseRef().update({
      timeleft: time,
      startTime: startTime,
      hasGameStarted: true
    });
  }

  render() {
    var id = this.getSessionId();
    var users = this.getSessionUserIds().map(user_id => (
      <li key={user_id}>{UserApi.getName(user_id)}</li>
    ));
    if (
      !this.state.hasGameStarted &&
      this.getSessionCreatorUserId() === this.getMyUserId()
    ) {
      return (
        <div>
          <button id="fivem" onClick={() => this.startgame(5)}>
            5 minuts
          </button>
          <button id="tenm" onClick={() => this.startgame(10)}>
            10 minuts
          </button>
          <button id="fithteenm" onClick={() => this.startgame(15)}>
            15 minuts
          </button>
        </div>
      );
    } else if (!this.state.stateGameStarted) {
      return (
        <div>
          <p>Waiting for Host to start the game</p>
        </div>
      );
    } else if (this.state.hasGameStarted) {
      return (
        <div>
          <Scorebored />
          <Cookie />
        </div>
      );
    }
  }
}
