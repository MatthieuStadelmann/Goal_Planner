import React from 'react';
import { connect }  from 'react-redux';
import { deleteAll } from './actions';

class DeleteAll extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { deleteAll } = this.props;

    return (<div className='deleteAll'>
      <button type="button" onClick={() => {
          deleteAll()
        }}>
        Start a New Week
      </button>
    </div>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAll: () => dispatch(deleteAll())
  }
};
export default connect(null, mapDispatchToProps)(DeleteAll);
