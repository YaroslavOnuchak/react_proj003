import { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = { value: "" };
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onChange(this.state.value);
    console.log("sybmit", this.props);
  };

  onChange = (e) => {
    console.log("onChange");
    const { value } = e.target;
    this.setState({ value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="balance"
          type="number"
          placeholder="cyma"
          onChange={this.onChange}
          value={this.state.value}
        />
        <button>save</button>
      </form>
    );
  }
}
export default Form;
