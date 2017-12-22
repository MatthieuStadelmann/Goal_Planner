import React from 'react';
import {connect} from 'react-redux';
import {Todo} from './Todo';
import Tasklist from './TaskList';
import DeleteAll from './DeleteAll';
import ArchiveDone from './ArchiveDone';


export class App extends React.Component {

  render() {
    const {children} = this.props;
    return (<div className='main'>
      <div className='welcome'>
        <div className='nav'>
          <img src='/images/lavender.svg'/>
          <h1>LAVENDER GOAL PLANNER</h1>
          <div className='features'>
          <ArchiveDone />
            <DeleteAll />
        </div>
        </div>
        <div className='todocontainer'>
          {children}
        </div>
      </div>
    </div>)

  }
}
const mapStateToProps = (state) => {
  return {}
};
const mapDispatchToProps = (dispatch) => {
  return {}
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
