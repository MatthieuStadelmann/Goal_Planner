import React from 'react';
import { connect } from 'react-redux';
import  TeamDuty  from './TeamDuty';


export class StatusHandler extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { taskInfos, submitOption, TaskID } = this.props;

    console.log('MY VALUE', )

    return (<div className='statusHandler'>
      <span>Task: {taskInfos}</span>
      <form>
     <div className="radio">
       <label>
         <input type="radio" value="done" />
         Done
       </label>
     </div>
     <div className="radio">
       <label>
         <input type="radio" value="workInProgress"  />
         Work in progress
       </label>
     </div>
     <div className="radio">
       <label>
         <input type="radio" value="emergency"  />
         Emergency
       </label>
     </div>
     <button type="button" onClick={(e) => {
       submitOption(this.state.selectedOption, taskId)
       }}>
       Submit
     </button>
   </form>
    </div>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // submitOption: () => dispatch.submitOption(option, taskId)
  }
};
export default connect(null, mapDispatchToProps)(StatusHandler);
