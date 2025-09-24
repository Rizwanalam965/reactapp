import React, { Component } from "react";

export default class LifeCycleInCBC extends Component {
  constructor() {
    super();
    console.log("I am constructor");
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component did mount");
    this.intervalID = setInterval(()=>{
      console.log("API CALL");
    },2000)
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidUpdate() {
    console.log("Component did update");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("prev State was ", prevState);
    return null;
  }

  componentWillUnmount(){
    console.log("component will unmount bye bye");
    clearInterval(this.intervalID)
  }

  render() {
    console.log("I am Render");
    return (
      <div>
        <h1>LifeCycleInCBC {this.state.count}</h1>
        <button className="bg-blue-400 py-1 px-3" onClick={this.increment}>
          click
        </button>
      </div>
    );
  }
}
