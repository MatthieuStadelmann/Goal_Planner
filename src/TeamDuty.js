import React from 'react';
import {connect} from 'react-redux';
import { getTasks, handleTask, deleteTask, addTask } from './actions';
import StatusHandler from './StatusHandler';
import AddTask from './AddTask';
import DeleteTask from './DeleteTask';

class TeamDuty extends React.Component {

  constructor(props) {
    super(props);

  };

  componentDidMount() {
    this.props.getTasks();
  };

  render() {

    const { monday, tuesday, wednesday, thursday, friday, clickedTask, handleTask, statusHandlerIsVisible } = this.props;

    return (<div className='todo'>
      <div className='tasklistcontainer'>
        <div className='planningday'>
          <h2>MONDAY</h2>
          <div className='tasks'>
            <AddTask day='MONDAY'/>
            {
              monday && monday.map((mondayTask, index) => <div className={'task' + mondayTask.status} key={index}>
                <span onClick={e => handleTask(mondayTask)}>{mondayTask.taskname}</span>
                <DeleteTask taskId={mondayTask.id}/>
              </div>)
            }
          </div>
        </div>
        <div className='planningday'>
          <h2>TUESDAY</h2>
          <div className='tasks'>
            <AddTask day='TUESDAY'/>
            {
              tuesday && tuesday.map((tuesdayTask, index) => <div className={'task' + tuesdayTask.status} key={index}>
                <span onClick={e => handleTask(tuesdayTask)}>{tuesdayTask.taskname}</span>
                <DeleteTask taskId={tuesdayTask.id}/>
              </div>)
            }
          </div>
        </div>
        <div className='planningday'>
          <h2>WEDNESDAY</h2>
          <div className='tasks'>
            <AddTask day='WEDNESDAY'/>
            {
              wednesday && wednesday.map((wednesdayTask, index) => <div className={'task' + wednesdayTask.status} key={index}>
                <span onClick={e => handleTask(wednesdayTask)}>{wednesdayTask.taskname}</span>
                <DeleteTask taskId={wednesdayTask.id}/>
              </div>)
            }
          </div>
        </div>
        <div className='planningday'>
          <h2>THURSDAY</h2>
          <div className='tasks'>
            <AddTask day='THURSDAY'/>
            {
              thursday && thursday.map((thursdayTask, index) => <div className={'task' + thursdayTask.status} key={index}>
                <span onClick={e => handleTask(thursdayTask)}>{thursdayTask.taskname}</span>
                <DeleteTask taskId={thursdayTask.id}/>
              </div>)
            }
          </div>
        </div>
        <div className='planningday'>
          <h2>FRIDAY</h2>
          <div className='tasks'>
              <AddTask day='FRIDAY'/>
            {
              friday && friday.map((fridayTask, index) => <div className={'task' + fridayTask.status} key={index}>
                <span onClick={e => handleTask(fridayTask)}>{fridayTask.taskname}</span>
                <DeleteTask taskId={fridayTask.id}/>
              </div>)
            }
          </div>
        </div>
        {statusHandlerIsVisible && <StatusHandler clickedTask={clickedTask}/>}
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {

  console.log('inside team duty', state)

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
