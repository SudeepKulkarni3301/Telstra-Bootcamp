import React, { Component } from "react";

export default class Classcounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Classcounter</h1>
        <button onClick={this.incrementCount}>
          Count is {this.state.count}
        </button>
      </div>
    );
  }
}
