import React from "react";
import { Alert } from "antd";

import DeleteTask from "./deleteTask";
import EditTask from "./editTask";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  render() {
    return <div>{this.renderTask()}</div>;
  }
  renderTask() {
    const { task } = this.props;

    return (
      <div className="item-width">
        <div className="item">
          <Alert
            message={task}
            onClick={this.toggleTask.bind(this)}
            className="pointer"
            type="success"
          />
          <EditTask editTask={this.props.editTask} id={this.props.id} />
          <DeleteTask deleteTask={this.props.deleteTask} id={this.props.id} />
        </div>
      </div>
    );
  }

  toggleTask() {
    console.log("TOGGLE ");
    this.props.toggleTask(this.props.id);
  }
}

export default Item;
