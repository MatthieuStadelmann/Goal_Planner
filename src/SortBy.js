import React from 'react';
import {connect} from 'react-redux';
import {handlePriority, submitPriority} from './actions';

class SortBy extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {handlePriority, submitPriority, priority} = this.props;

    console.log(this.props.priority)

    return (
      <div className='selectedOption'>
      Priority:
      <select onChange={handlePriority}>
        <option value="Done">Done</option>
        <option value="workInProgress">Work In Progress</option>
        <option value="emergency">Emergency</option>
      </select>
      <button type="button" onClick={(e) => {
          submitPriority(priority)
        }}>
        Submit
      </button>
    </div>);
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    handlePriority: (priority) => dispatch(handlePriority(event.target.value)),
    submitPriority: (priority) => dispatch(submitPriority(priority))
  }
};

const mapStateToProps = (state) => {

  return {priority: state.priority}
};
export default connect(mapStateToProps, mapDispatchToProps)(SortBy);

//console.log(`Selected: ${selectedOption.label}`);
