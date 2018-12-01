import React from "react";
import { Input, Button } from "antd";

export default class CreatorTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.createTask(this.state.value);
    this.state.value = "";
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="example-input">
        <Input
          placeholder="Basic usage"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button type="primary" htmlType="submit">
          Add Task
        </Button>
      </form>
    );
  }
}
