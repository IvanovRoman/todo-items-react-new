import React from "react";
import { Layout, Menu, Icon } from "antd";
import "./app.css";

import CreatorTask from "./createTask";
import ListTasks from "./listTasks";

const { Header, Content, Footer, Sider } = Layout;
const todos = {
  items: [],
  lsKey: "todos",
  populate() {
    this.items = this.get();
  },
  get() {
    try {
      return JSON.parse(localStorage.getItem(this.lsKey)) || [];
    } catch (e) {
      return [];
    }
  },
  save() {
    localStorage.setItem(this.lsKey, JSON.stringify(this.items));
  },
  toggle(id) {
    let todoItem = this.items[id];
    todoItem.isCompleted = !todoItem.isCompleted;
    this.save();
  },
  add(obj) {
    this.items.push(obj);
    this.save();
  },
  remove(id) {
    this.items.splice(id, 1);
    this.save();
  },
  edit(id, task) {
    let todoItem = this.items[id];
    todoItem.task = task;
    this.save();
  }
};
todos.populate();

class App extends React.Component {
  constructor(props) {
    super(props); // call construct React.Component

    this.state = {
      todos: todos.items
    };
  }

  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">Menu1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">Menu2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">Menu3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <h1>Todo Items</h1>
              <CreatorTask createTask={this.createTask.bind(this)} />
              <ListTasks
                todos={this.state.todos}
                toggleTask={this.toggleTask.bind(this)}
                editTask={this.editTask.bind(this)}
                deleteTask={this.deleteTask.bind(this)}
              />
            </div>
          </Content>
          <Footer>Todo Application @2019 Created by TetraSetting</Footer>
        </Layout>
      </Layout>
    );
  }

  createTask(task) {
    task = task.trim();
    if (!task) return;
    todos.add({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }

  toggleTask() {
    todos.toggle(taskId);
    this.setState({ todos: this.state.todos });
  }
  editTask(taskId, task) {
    todos.edit(taskId, task);
    this.setState({ todos: this.state.todos });
  }
  deleteTask(taskId) {
    todos.remove(taskId);
    this.setState({ todos: this.state.todos });
  }
}

export default App;
