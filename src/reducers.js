const defaultState = {
  tasks: []
}

export default function(state = defaultState, action) {

  if (action.type == 'ADD_TASK') {
    state = Object.assign({}, state, {
      tasks: state.tasks.concat(action.obj)
    });
  }
  
  if (action.type == 'GET_TASKS') {
    console.log('inside get task reducer', action)
    state = Object.assign({}, state, {tasks: action.tasks});
  }


  // DELETE TASK NEED TO GET SOME MORE WORK
  // if (action.type == 'DELETE_TASK') {
  //   state = Object.assign({}, state, {
  //       tasks: state.tasks.filter(task => {
  //         return user.id !== task
  //       })
  //     });
  //   }
  return state
}
