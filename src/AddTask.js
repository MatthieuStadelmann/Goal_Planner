import React from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions';

export class AddTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
   }

  handleChange(e) {
    this.setState({text: e.target.value})
  }
  render() {

    const { addTask } = this.props;

    return (<div className="add-task">
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
      <button type="button" onClick={(e) => {
          this.props.addTask(this.state.text, this.props.day)
        }}>
        Add
      </button>
    </div>)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (taskname, day) => dispatch(addTask(taskname, day))
  }
};
export default connect(null, mapDispatchToProps)(AddTask);
