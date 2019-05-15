import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js";
import Scorebored from "./Scorebored.js";
import Cookie from "./Cookie.js";
import Time from "./Time.js";

export default class CookieClicker extends GameComponent {
  constructor(props) {
    super(props);
    this.getSessionDatabaseRef().update({
      hostScore: 0,
      guestScore: 0,
      hasGameStarted: false,
      timelefts: 0,
      timeleftm: 0
    });
  }

  onSessionDataChanged(data) {
    this.setState({
      hostScore: data.hostScore,
      guestScore: data.guestScore,
      hasGameStarted: data.hasGameStarted,
      timeleftm: data.timeleftm,
      timelefts: data.timelefts,
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
    var winner = null;
    if (this.state.hostScore > this.state.guestScore) {
      winner = this.getSessionCreatorUserId();
    } else if (this.state.hostScore < this.state.guestScore) {
      winner = this.getSessionUserIds()[1];
    }
    if (winner === null) {
      return "Tied";
    } else if (winner === this.getMyUserId()) {
      return "Winning";
    } else {
      return "Losing";
    }
  }

  startGame(time) {
    var startTime = new Date();
    startTime.setSeconds(startTime.getSeconds + 10);
    this.getSessionDatabaseRef().update({
      timeleftm: this.state.timeleftm + time,
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
        <div className="buttonholder">
          <button
            className="stime"
            id="fivem"
            onClick={() => this.startGame(5)}
          >
            5 minuts
          </button>
          <button
            className="stime"
            id="tenm"
            onClick={() => this.startGame(10)}
          >
            10 minuts
          </button>
          <button
            className="stime"
            id="fithteenm"
            onClick={() => this.startGame(15)}
          >
            15 minuts
          </button>
        </div>
      );
    } else if (!this.state.hasGameStarted) {
      return (
        <div>
          <p>Waiting for Host to start the game</p>
        </div>
      );
    } else if (
      this.state.hasGameStarted &&
      this.getSessionCreatorUserId() === this.getMyUserId()
    ) {
      return (
        <div>
          <Time
            startTimemin={this.state.timeleftm}
            startTimesec={this.state.timelefts}
            startyn={this.state.hasGameStarted}
          />
          <Scorebored
            PlayerOne={UserApi.getName(this.getSessionUserIds()[0])}
            PlayerTwo={UserApi.getName(this.getSessionUserIds()[1])}
            p1s={this.state.hostScore}
            p2s={this.state.guestScore}
            winOrLoss={this.state.winningOrLosing}
            startTimemin={this.state.timeleftm}
            startTimesec={this.state.timelefts}
          />
          <Cookie
            clickHandler={() => this.updateScore()}
            score={this.state.hostScore}
          />
        </div>
      );
    } else if (
      this.state.hasGameStarted &&
      this.getSessionCreatorUserId() !== this.getMyUserId()
    ) {
      return (
        <div>
          <Time
            startTimemin={this.state.timeleftm}
            startTimesec={this.state.timelefts}
            startyn={this.state.hasGameStarted}
          />
          <Scorebored
            PlayerOne={UserApi.getName(this.getSessionUserIds()[0])}
            PlayerTwo={UserApi.getName(this.getSessionUserIds()[1])}
            p1s={this.state.hostScore}
            p2s={this.state.guestScore}
            winOrLoss={this.state.winningOrLosing}
          />
          <Cookie
            clickHandler={() => this.updateScore()}
            score={this.state.guestScore}
          />
        </div>
      );
    }
  }
}
