import React from 'react';
import { connect } from 'react-redux';
import TeamDuty from './TeamDuty';
import { handleRadioChange, submitOption } from './actions';
import { RadioGroup, Radio } from 'react-radio-group';
import DeleteTask from './DeleteTask';

class StatusHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { clickedTask, submitOption, selectedOption, handleRadioChange } = this.props;

    return (<div className='statusHandler'>

      <form>
        <span>Goal:{' '}{clickedTask.taskname}</span>
        <RadioGroup name="taskStatus" selectedValue={selectedOption} onChange={handleRadioChange}>
          <Radio value="done"/>Done{' '}
          <Radio value="workInProgress"/>Work In Progress{' '}
          <Radio value="emergency"/>Emergency
        </RadioGroup>
        <button type="button" onClick={(e) => {
            submitOption(selectedOption, clickedTask.id)
          }}>
          Submit
        </button>
          <DeleteTask taskId={clickedTask.id}/>
      </form>
    </div>)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleRadioChange: (selectedOption) => dispatch(handleRadioChange(selectedOption)),
    submitOption: (selectedOption, taskId) => dispatch(submitOption(selectedOption, taskId))
  }
};

const mapStateToProps = (state) => {

  return {
    selectedOption: state.selectedOption
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(StatusHandler);
