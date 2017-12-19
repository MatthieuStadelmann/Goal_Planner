const defaultState = {
  tasks: []
}

export default function(state = defaultState, action) {

  if (action.type == 'ADD_TASK') {
    console.log('add task', action)
    state = Object.assign({}, state, {

      tasks: state.tasks.concat(action.newTask)
    });
  }

  if (action.type == 'GET_TASKS') {
    console.log('inside get task', action.tasks)
    state = Object.assign({}, state, {tasks: action.tasks});
  }

  // DELETE TASK NEED TO GET SOME MORE WORK
  if (action.type == 'DELETE_TASK') {

    state = Object.assign({}, state, {
        tasks: state.tasks.filter(task => {
            console.log('inside delete task', action, task)
          return task.id !== action.taskId
        })
      });
      console.log('my state', state)
    }

  return state
}
