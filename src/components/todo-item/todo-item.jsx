import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ id, text, isCompleted, removeTask, completeTask }) => (
  <li className="todo-item">
    <i
      className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'}
      onClick={() => completeTask(id)}
    />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i
      className="fas fa-times"
      onClick={() => removeTask(id)}
    />
  </li>
);

ToDoItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
}

ToDoItem.defaultProps = {
  id: 0,
  text: '',
  isCompleted: false,
  removeTask: () => {},
  completeTask: () => {},
}

export default ToDoItem;