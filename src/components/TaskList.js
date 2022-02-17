import React, { Component } from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => (
            <TaskItem
              key={index}                   
              taskItem={task}
              id={index}
              deleteTask={this.props.deleteTask}//passing function to children
              editTask={this.props.editTask}
              toggleTask={this.props.toggleTask}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
