const defaultState = {
  tasks: []
}

export default function(state = defaultState, action) {

  if (action.type == 'ADD_TASK') {
    state = Object.assign({}, state, {
      tasks: state.tasks.concat(action.newTask)
    });
  }
  if (action.type == 'GET_TASKS') {
    state = Object.assign({}, state, {tasks: action.tasks});
  }
  if (action.type == 'DELETE_TASK') {

    state = Object.assign({}, state, {
        tasks: state.tasks.filter(task => {
          return task.id !== action.taskId
        })
      });
    }
  return state
}
