import React from 'react';
import {connect}  from 'react-redux';
import { deleteTask } from './actions';

class DeleteTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { deleteTask, taskId } = this.props;


    return (<div className='taskcontainer'>
      <button type="button" onClick={() => {
          deleteTask(taskId)
        }}>
        Delete Goal
      </button>
    </div>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (taskId) => dispatch(deleteTask(taskId))
  }
};
export default connect(null, mapDispatchToProps)(DeleteTask);
