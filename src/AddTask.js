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
    console.log('state', this.state.text)
  }
  render() {

    const { addTask } = this.props;
    console.log('this.props', this.props)

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
// const mapStateToProps = (state) => {
//   return {}
// };
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task, day) => dispatch(addTask(task, day))
  }
};
export default connect(null, mapDispatchToProps)(AddTask);
