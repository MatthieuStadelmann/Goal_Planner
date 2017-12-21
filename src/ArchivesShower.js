import React from 'react';
import { connect }  from 'react-redux';
import { getArchives } from './actions';
import  ArchiveDone from './ArchiveDone';

class ArchivesShower extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getArchives();
  };

  render() {

    const { getArchives, archives } = this.props;

    console.log('this.props completedTasks', this.props)

    return (
      <div className='completedtasks'>
        <h2>Completed Goals:</h2>
        {
          archives && archives.map((archivesGoals, index) => <div className='completedGoals' key={index}>
            <p>{archivesGoals.taskname}</p>
          </div>)
        }
    </div>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArchives: () => dispatch(getArchives())
  }
};
const mapStateToProps = (state) => {
  return {
    completedTasksAreVisible: state.completedTasksAreVisible,
    archives: state.archives
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArchivesShower);
