import React from "react";

export default class Time extends React.Component {
  time() {
    if (this.props.startyn === true) {
      var times = 0;
      var timem = this.props.startTime;
      console.log(timem);
      setInterval(function() {
        var test = 80;
        if (times === 0) {
          times = 59;
          timem = timem - 1;
        }
        if (times < test) {
          times = times - 1;
        }
      }, 1000);
    }
  }

  render() {
    return (
      <div>
        <h1>sdasdas {this.props.startTime}</h1>
      </div>
    );
  }
}
