import React from 'react';
import { connect }  from 'react-redux';
import { archiveDone, showArchives } from './actions';
import  ArchivesShower  from './ArchivesShower';

class ArchiveDone extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { archiveDone, completedTasksAreVisible, showArchives } = this.props;
    return (
      <div className='archivecontainer'>
        <div className='archivedone'>
      <button type="button" onClick={() => {
          archiveDone()
        }}>
        Archive Completed Goals
      </button>
    </div>
        <div className='showArchives'>
      <button type="button" onClick={() => {
        showArchives()
        }}>
        Show Archives
      </button>
    </div>
    {completedTasksAreVisible && <ArchivesShower />}
    </div>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showArchives: () => dispatch(showArchives()),
    archiveDone: () => dispatch(archiveDone())
  }
};
const mapStateToProps = (state) => {
  return {
    completedTasksAreVisible: state.completedTasksAreVisible
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArchiveDone);
