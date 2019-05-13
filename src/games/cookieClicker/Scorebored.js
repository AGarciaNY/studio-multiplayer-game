import React from "react";
import "./cookie.css";

export default class Scorebored extends React.Component {
  render() {
    return (
      <div>
        <table className="score">
          <caption>ScoreBored</caption>
          <tr className="playersname">
            <th>Player One:{this.props.PlayerOne}</th>
            <th>Player two:{this.props.PlayerTwo}</th>
          </tr>
          <tr className="playersc">
            <td>Score:{this.props.p1s}</td>
            <td>Time left:</td>
            <td>Score:{this.props.p2s}</td>
          </tr>
          <tr>
            <td>Win/Loss:{this.props.winOrLoss}</td>
            <td>(time)</td>
            <td>Wining/losing</td>
          </tr>
        </table>
        <table id="shop">
          <tr>
            <th>Items</th>
            <th>prise</th>
            <th>attributes</th>
          </tr>
          <tr>
            <td>Cursor</td>
            <td>$50</td>
            <td>probues 1 cookei ps</td>
          </tr>
          <tr>
            <td>Grandmas</td>
            <td>$100</td>
            <td>produce 5 cookies ps</td>
          </tr>
          <tr>
            <td>Farms</td>
            <td>$500</td>
            <td>produce 10 cookeis ps</td>
          </tr>
          <tr>
            <td>Factories</td>
            <td>$1000</td>
            <td>produce 25 cookies ps</td>
          </tr>
          <tr>
            <td>Mega Factory</td>
            <td>$10000</td>
            <td>Produce 100 Cookies ps</td>
          </tr>
        </table>
      </div>
    );
  }
}
