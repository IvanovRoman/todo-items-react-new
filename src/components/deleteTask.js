import React from "react";
import { Icon } from "antd";

class DeleteTask extends React.Component {
  constructor(props) {
    super(props);

    console.log("Item props: ", props);
  }

  render() {
    return (
      <Icon
        onClick={this.deleteTask.bind(this)}
        type="delete"
        className="pointer"
      />
    );
  }

  deleteTask() {
    console.log(this.props.deleteTask);
    this.props.deleteTask(this.props.id);
  }
}

export default DeleteTask;
