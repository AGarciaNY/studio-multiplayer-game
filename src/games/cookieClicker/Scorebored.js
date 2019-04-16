import React from "react";
import "./cookie.css";
export default class Scorebored extends React.Component {
  render() {
    return (
      <div>
        <table className="score">
          <caption>ScoreBored</caption>
          <tr className="playersname">
            <th>Player One:(name)</th>
            <th>Lastname</th>
            <th>Player two:(name)</th>
          </tr>
          <tr className="playersc">
            <td>Totall cookys:(num)</td>
            <td>Time left:</td>
            <td>Totall cookys:(num)</td>
          </tr>
          <tr>
            <td>Wining/losing</td>
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
            <td>Tax evasion</td>
            <td>$10000</td>
            <td>takes away extra costs</td>
          </tr>
        </table>
      </div>
    );
  }
}
