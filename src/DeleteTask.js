import React from 'react';
import { connect } from 'react-redux';

 export class DeleteTask extends React.Component {

   render() {

     const { deleteTask } = this.props;
     return(
       <div className='taskcontainer'>
         <button type="button" onClick={() => {
           this.props.deleteTask()
         }}>
           x
         </button>
       </div>
     )
   }
 }

 const mapDispatchToProps = (dispatch) => {
   return {
     deleteTask: () => dispatch(deleteTask(task))
   }
 };
 export default connect(mapDispatchToProps)(DeleteTask);
