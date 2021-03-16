import User from "../User";
import Balance from "../Balance";
import React, { Component } from "react";
import Transactions from "../Transactions";
import Form from "../Form";
let id = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      // date1: new Date(),
      transactions: [],
    };

    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    this.onChange = this.onChange.bind(this);
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  shouldComponentUpdate(prevProps, nextState) {
    console.log("shouldComponentUpdate");
    // debugger;
    return true;
  }
  tick() {
    this.state = {
      date1: new Date(),
    };
    console.log("object", this.state);
  }
  // onIncrease = () => {
  //   this.setState({
  //     balance: this.state.balance + 1,
  //   });
  // };
  onDecrease() {
    this.setState((state) => ({
      balance: this.state.balance - 1,
      transactions: [
        {
          label: "onDecrease",
          value: -1,
          id: ++id,
        },
        ...state.transactions,
      ],
    }));
  }
  onIncrease() {
    this.setState((state) => ({
      balance: state.balance + 1,
      transactions: [
        {
          label: "increase",
          value: 1,
          id: ++id,
        },
        ...state.transactions,
      ],
    }));
  }

  onChange = (value) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transactions: [
        { value, label: "change", id: ++id },
        ...state.transactions,
      ],
    }));
    console.log("object", this.state.transactions);
  };
  render() {
    console.log("rendser");
    return (
      <div className="App">
        <Balance balance={this.state.balance}>balance: </Balance>
        <Form onChange={this.onChange} />
        {/* <h2>It is {this.state.date1.toLocaleTimeString()}.</h2> */}
        <button onClick={this.onIncrease}>+1</button>
        <button onClick={this.onDecrease}>-1</button>
        <hr />
        {/* {this.state.transactions.length === 0
          ? "have'nt had transaction yet"
          : JSON.stringify(this.state.transactions)}
        {this.state.transaction} */}
        <hr />
        <Transactions transactions={this.state.transactions} />
      </div>
    );
  }
  s;
}
export default App;
