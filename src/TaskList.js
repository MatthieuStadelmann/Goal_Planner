import React from 'react';
import { connect } from 'react-redux';
import { Todo } from './Todo';
import AddTask from './AddTask';
import { getTasks, deleteTask } from './actions';


class TaskList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {

    this.props.getTasks();
  };

  render() {

    const { monday, tuesday, wednesday, thursday, friday } = this.props;

    return (<div className='tasklistcontainer'>
      <div className='planningday'>
        <h2>MONDAY</h2>
        <div className='tasks'>
            <AddTask day='MONDAY'/>
          {
            monday && monday.map((mondayTask, index) => <div className='task' key={index}>
              <p>{mondayTask.taskname}</p>
            </div>)
          }
        </div>
      </div>
      <div className='planningday'>
        <h2>TUESDAY</h2>
          <div className='tasks'>
            <AddTask day='TUESDAY'/>
        {
          tuesday && tuesday.map((tuesdayTask, index) => <div className='task' key={index}>
              <p>{tuesdayTask.taskname}</p>
          </div>)
        }
          </div>
      </div>
      <div className='planningday'>
        <h2>WEDNESDAY</h2>
        <div className='tasks'>
          <AddTask day='WEDNESDAY'/>
        {
          wednesday && wednesday.map((wednesdayTask, index) => <div className='task' key={index}>
              <p>{wednesdayTask.taskname}</p>
          </div>)
        }
          </div>
      </div>
      <div className='planningday'>
        <h2>THURSDAY</h2>
            <div className='tasks'>
             <AddTask day='THURSDAY'/>
        {
          thursday && thursday.map((thursdayTask, index) => <div className='task' key={index}>
              <p>{thursdayTask.taskname}</p>
          </div>)
        }
        </div>
      </div>
      <div className='planningday'>
        <h2>FRIDAY</h2>
            <div className='tasks'>
            <AddTask day='FRIDAY'/>
        {
          friday && friday.map((fridayTask, index) => <div className='task' key={index}>
              <p>{fridayTask.taskname}</p>
          </div>)
        }
          </div>
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {


  return {
    monday: state.tasks && state.tasks.filter(task => task.day == 'MONDAY'),
    tuesday: state.tasks && state.tasks.filter(task => task.day == 'TUESDAY'),
    wednesday: state.tasks && state.tasks.filter(task => task.day == 'WEDNESDAY'),
    thursday: state.tasks && state.tasks.filter(task => task.day == 'THURSDAY'),
    friday: state.tasks && state.tasks.filter(task => task.day == 'FRIDAY')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: () => dispatch(getTasks())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
