import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import { addTast, removeTask } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

class ToDo extends Component {

  state = {
    activeFilter: 'all',
    taskText: '',
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const { addTast } = this.props;

      addTast((new Date()).getTime(), taskText, false);

      this.setState({
        taskText: '',
      });
    }
  };

  render() {
    const { activeFilter, taskText } = this.state;
    const { tasks, removeTask } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput
          value={taskText}
          onChange={this.handleInputChange}
          onKeyPress={this.addTask}
        />
        {isTasksExist && <ToDoList tasksList={tasks} removeTask={removeTask} />}
        {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks,
}), { addTast, removeTask })(ToDo);