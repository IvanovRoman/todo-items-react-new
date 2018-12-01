import React from "react";
import { Icon, Input } from "antd";

class EditTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  if() {
    return (
      <form onSubmit={this.handleSubmit} className="example-input">
        <Input
          placeholder="Basic usage"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <input ref="task" autoFocus />
          <div>
            <Icon
              onClick={this.editTask.bind(this, false)}
              type="save"
              className="pointer"
            />
          </div>
        </div>
      );
    }
    return (
      <Icon
        onClick={this.setEditTask.bind(this, true)}
        type="edit"
        className="pointer"
      />
    );
  }

  editTask(e) {
    this.props.editTask(this.props.id, this.refs.task.value);
    this.setState({
      isEditing: false
    });
  }

  setEditTask(isEditing) {
    this.setState({
      isEditing
    });
  }
}

export default EditTask;
