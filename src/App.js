import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 3 },
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("Handle delete...." + counterId);
    const counter = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counter });
  };

  handleReset = () => {
    console.log("Handle reset....");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    console.log("handle increment......" + counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = counters[index].value + 1;
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <h1>My First React App [Counter-Increment]</h1>
        <h3>Enjoy Learning</h3>
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
