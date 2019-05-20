import React from "react";
import "./cookie.css";
import Time from "./Time.js";

export default class Scorebored extends React.Component {
  render() {
    return (
      <div>
        <table className="score">
          <caption>ScoreBored</caption>
          <tr className="playersname">
            <th>Player One:{this.props.PlayerOne}</th>
            <th>{this.props.winOrLoss}</th>
            <th>Player two:{this.props.PlayerTwo}</th>
          </tr>
          <tr className="playersc">
            <td>Score:{this.props.p1s}</td>
            <td>Time left:</td>
            <td>Score:{this.props.p2s}</td>
          </tr>
          <tr>
            <td />
            <td>
              <Time
                minutes={this.props.startTimemin}
                seconds={this.props.startTimesec}
              />
            </td>
            <td />
          </tr>
        </table>
        <table id="shop">
          <tr>
            <th>Items</th>
            <th>price</th>
            <th>attributes</th>
          </tr>
          <tr>
            <td>
              <button
                id="Cursors"
                disabled={this.props.currentScore < 50}
                onClick={() => this.props.multipleClicks(1, 50)}
              >
                Cursor
              </button>
            </td>
            <td>$50</td>
            <td>produces 1 cookie per second</td>
          </tr>
          <tr>
            <td>
              <button
                id="Grandmas"
                disabled={this.props.currentScore < 100}
                onClick={() => this.props.multipleClicks(5, 100)}
              >
                Grandmas
              </button>
            </td>
            <td>$100</td>
            <td>produces 5 cookies per second</td>
          </tr>
          <tr>
            <td>
              <button
                id="Farms"
                disabled={this.props.currentScore < 500}
                onClick={() => this.props.multipleClicks(10, 500)}
              >
                Farms
              </button>
            </td>
            <td>$500</td>
            <td>produces 10 cookies per second</td>
          </tr>
          <tr>
            <td>
              <button
                id="Factories"
                disabled={this.props.currentScore < 1000}
                onClick={() => this.props.multipleClicks(25, 1000)}
              >
                Factories
              </button>
            </td>
            <td>$1000</td>
            <td>produces 25 cookies per second</td>
          </tr>
          <tr>
            <td>
              <button
                id="MegaFactory"
                disabled={this.props.currentScore < 10000}
                onClick={() => this.props.multipleClicks(100, 10000)}
              >
                Mega Factory
              </button>
            </td>
            <td>$10000</td>
            <td>produces 100 Cookies per second</td>
          </tr>
        </table>
      </div>
    );
  }
}
// $('.Cursors').click(){
// function Cursor{
//   //Needs to determine the player clicking button
//   //Needs to add a cookie each second to the player that clicked on the button
// }
// }
