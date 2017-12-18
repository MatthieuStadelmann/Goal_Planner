import React from 'react';
import { App } from './App';
import TaskList from './TaskList';

export class Todo extends React.Component {

  render() {

    return(
      <div className="todo">
        <TaskList />
      </div>
    )
  }
}
