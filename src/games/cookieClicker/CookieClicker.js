import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js";
import Scorebored from "./Scorebored.js";
import Cookie from "./Cookie.js";
export default class CookieClicker extends GameComponent {
  // onSessionDataChanged(data) {
  //   console.log(data.user_id);
  // }

  // handleButtonClick() {
  //   this.getSessionDatabaseRef().set({
  //     user_id: UserApi.getName(this.getMyUserId())
  //   });
  // }
  //start timer
  // Function Timer(){
  //   var now = new Date().getTime();
  //   var elapsed = new Date().getTime() - now;
  //   document.getElementById("timer").innerHtml = elapsed;
  //   if (elapsed > 300000 /*milliseconds in 5 minutes*/) {
  //   alert ("5 minutes up!");
  //End Timer

  render() {
    var id = this.getSessionId();
    var users = this.getSessionUserIds().map(user_id => (
      <li key={user_id}>{UserApi.getName(user_id)}</li>
    ));

    var player1 = users[0];
    var player2 = users[1];
    var creator = UserApi.getName(this.getSessionCreatorUserId());

    return (
      <div>
        <p>Session ID: {id}</p>
        <p>Session creator: {creator}</p>
        <p>Session users:</p>
        <ul> {player1} </ul>
        <ul> {player2} </ul>
        <button id="fivem">5 minuts</button>
        <button id="tenm">10 minuts</button>
        <button id="fithteenm">15 minuts</button>
        <Scorebored />
        <Cookie />
      </div>
    );
  }
}
