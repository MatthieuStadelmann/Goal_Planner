import React from 'react';
import {connect} from 'react-redux';
import { Todo } from './Todo';
import { getTasks } from './actions';
import { StatusHandler } from './StatusHandler';

class TeamDuty extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      statusHandlerIsVisible: false
    }
    this.handleTask = this.handleTask.bind(this)
  }

  handleTask(e) {
  this.setState(prevState => ({
    statusHandlerIsVisible: !prevState.statusHandlerIsVisible
  }));
    console.log("MY VALUE", e.target)
}
  componentDidMount() {

    this.props.getTasks();
  };

  render() {

    const {monday, tuesday, wednesday, thursday, friday} = this.props;

    return (<div className='tasklistcontainer'>
      <div className='planningday'>
        <h2>MONDAY</h2>
        <div className='tasks'>
          {
            monday && monday.map((mondayTask, index) => <div className='task' key={index}>
              <span onClick={this.handleTask}>{mondayTask.taskname}</span>
              {this.state.statusHandlerIsVisible && <StatusHandler value={mondayTask.id} taskInfos= {mondayTask.taskname} />}
            </div>)
          }
        </div>
      </div>
      <div className='planningday'>
        <h2>TUESDAY</h2>
          <div className='tasks'>
        {
          tuesday && tuesday.map((tuesdayTask, index) => <div className='task' key={index}>
              <span onClick={this.handleTask}>{tuesdayTask.taskname}</span>
              {this.state.statusHandlerIsVisible && <StatusHandler taskInfos= {tuesdayTask.taskname} />}
          </div>)
        }
          </div>
      </div>
      <div className='planningday'>
        <h2>WEDNESDAY</h2>
        <div className='tasks'>
        {
          wednesday && wednesday.map((wednesdayTask, index) => <div className='task'  key={index}>
              <span onClick={this.handleTask}>{wednesdayTask.taskname}</span>
              {this.state.statusHandlerIsVisible && <StatusHandler taskInfos= {wednesdayTask.taskname} />}
          </div>)
        }
          </div>
      </div>
      <div className='planningday'>
        <h2>THURSDAY</h2>
            <div className='tasks'>
        {
          thursday && thursday.map((thursdayTask, index) => <div className='task' key={index}>
              <span onClick={this.handleTask}>{thursdayTask.taskname}</span>
              {this.state.statusHandlerIsVisible && <StatusHandler taskInfos= {thursdayTask.taskname} />}
          </div>)
        }
        </div>
      </div>
      <div className='planningday'>
        <h2>FRIDAY</h2>
            <div className='tasks'>
        {
          friday && friday.map((fridayTask, index) => <div className='task' key={index}>
              <span onClick={this.handleTask}>{fridayTask.taskname}</span>
              {this.state.statusHandlerIsVisible && <StatusHandler taskInfos= {fridayTask.taskname} />}
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
export default connect(mapStateToProps, mapDispatchToProps)(TeamDuty);
