import React from "react";

// Rearrange date value to get the order you want... also replace / with a cooler separator like ⋅
export default class App extends React.Component {
  state = {
    date: ""
  };
  componentDidMount() {
    this.getDate();
  }
  getDate = () => {
    var currentDate = new Date().toDateString();
    this.setState({ currentDate });
  };
  render() {
    const { currentDate } = this.state;
    return <div>{currentDate}</div>;
  }
}