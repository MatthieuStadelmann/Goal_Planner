import React from 'react';
import {connect} from 'react-redux';
import { Todo } from './Todo';
import { getTasks, handleTask } from './actions';
import { StatusHandler } from './StatusHandler';

class TeamDuty extends React.Component {

  constructor(props) {
    super(props);

  };

  componentDidMount() {
    this.props.getTasks();
  };

  render() {

    const {monday, tuesday, wednesday, thursday, friday, clickedTask, handleTask, statusHandlerIsVisible} = this.props;
    console.log('this.props', this.props)

    return (<div className='tasklistcontainer'>
      <div className='planningday'>
        <h2>MONDAY</h2>
        <div className='tasks'>
          {
            monday && monday.map((mondayTask, index) => <div className='task' key={index}>
              <span onClick={e => handleTask(mondayTask.taskname)}>{mondayTask.taskname}</span>
            </div>)
          }

        </div>
      </div>
      <div className='planningday'>
        <h2>TUESDAY</h2>
          <div className='tasks'>
        {
          tuesday && tuesday.map((tuesdayTask, index) => <div className='task' key={index}>
              <span onClick={e => handleTask(tuesdayTask.taskname)}>{tuesdayTask.taskname}</span>
          </div>)
        }
          </div>
      </div>
      <div className='planningday'>
        <h2>WEDNESDAY</h2>
        <div className='tasks'>
        {
          wednesday && wednesday.map((wednesdayTask, index) => <div className='task'  key={index}>
              <span onClick={e => handleTask(wednesdayTask.taskname)}>{wednesdayTask.taskname}</span>
          </div>)
        }
          </div>
      </div>
      <div className='planningday'>
        <h2>THURSDAY</h2>
            <div className='tasks'>
        {
          thursday && thursday.map((thursdayTask, index) => <div className='task' key={index}>
              <span onClick={e => handleTask(thursdayTask.taskname)}>{thursdayTask.taskname}</span>
          </div>)
        }
        </div>
      </div>
      <div className='planningday'>
        <h2>FRIDAY</h2>
            <div className='tasks'>
        {
          friday && friday.map((fridayTask, index) => <div className='task' key={index}>
              <span onClick={e => handleTask(fridayTask.taskname)}>{fridayTask.taskname}</span>
          </div>)
        }
          </div>
      </div>
      {statusHandlerIsVisible && <StatusHandler taskInfos={clickedTask} />}
    </div>)
  }
}

const mapStateToProps = (state) => {

console.log('my state', state)

  return {
    monday: state.tasks && state.tasks.filter(task => task.day == 'MONDAY'),
    tuesday: state.tasks && state.tasks.filter(task => task.day == 'TUESDAY'),
    wednesday: state.tasks && state.tasks.filter(task => task.day == 'WEDNESDAY'),
    thursday: state.tasks && state.tasks.filter(task => task.day == 'THURSDAY'),
    friday: state.tasks && state.tasks.filter(task => task.day == 'FRIDAY'),
    clickedTask: state.clickedTask,
    statusHandlerIsVisible: state.statusHandlerIsVisible
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    getTasks: () => dispatch(getTasks()),
    handleTask: (task) => dispatch(handleTask(task))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(TeamDuty);
