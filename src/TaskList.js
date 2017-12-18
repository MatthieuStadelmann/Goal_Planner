import React from 'react';
import {connect} from 'react-redux';
import {Todo} from './Todo';
import AddTask from './AddTask';
import {getTasks} from './actions';

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

    console.log('MES CONSTANTES', this.props)

    return (<div className='tasklistcontainer'>
      <div className='planningday'>
        <h2>MONDAY</h2>
        <div className='task'>
        {
        monday && monday.map((monday, index) => <div key={index}>
              <p>{monday.tasks}</p>
          </div>)
        }
          </div>
        <AddTask day='MONDAY'/>
      </div>
      <div className='planningday'>
        <h2>TUESDAY</h2>
        {
          tuesday && tuesday.map((tuesday, index) => <div key={index}>
            <div className='task'>
              <p>{tuesday.tasks}</p>
            </div>
          </div>)
        }
        <AddTask day='TUESDAY'/>
      </div>
      <div className='planningday'>
        <h2>WEDNESDAY</h2>
        {
          wednesday && wednesday.map((wednesday, index) => <div key={index}>
            <div className='task'>
              <p>{wednesday.tasks}</p>
            </div>
          </div>)
        }
        <AddTask day='WEDNESDAY'/>
      </div>
      <div className='planningday'>
        <h2>THURSDAY</h2>
        {
        thursday && thursday.map((thursday, index) => <div key={index}>
            <div className='task'>
              <p>{thursday.tasks}</p>
            </div>
          </div>)
        }
        <AddTask day='THURSDAY'/>
      </div>
      <div className='planningday'>
        <h2>FRIDAY</h2>
        {
        friday && friday.map((friday, index) => <div key={index}>
            <div className='task'>
              <p>{friday.tasks}</p>
            </div>
          </div>)
        }
        <AddTask day='FRIDAY'/>
      </div>
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
    friday: state.tasks && state.tasks.filter(task => task.day == 'FRIDAY')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: () => dispatch(getTasks())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
