import React from 'react';
import { connect } from 'react-redux';
import { Todo } from './Todo';
import  Tasklist  from './TaskList';

export class App extends React.Component {

  render() {

    return (<div className='main'>
      <div className='welcome'>
      <h1>HELLO WORLD</h1>
      <div className='todocontainer'>
        <Todo />
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
