const defaultState = {
  tasks: [],
  statusHandlerIsVisible: false,
  clickedTask: [],
  selectedOption: 'workInProgress'
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

  if (action.type == 'HANDLE_TASK') {
    for (var i = 0; i < state.tasks.length; i++) {
      if (state.tasks[i].id == action.task.id) {
        state = Object.assign({}, state, {
          clickedTask: state.tasks[i],
          statusHandlerIsVisible: !state.statusHandlerIsVisible,
        })
      }
    }
  }

  if (action.type == 'HANDLE_RADIO_CHANGE') {
    state = Object.assign({}, state, {selectedOption: action.selectedOption})
  }

  if (action.type == 'UPDATE_TASK_STATUS') {
    for (var i = 0; i < state.tasks.length; i++) {
      if (state.tasks[i].id == action.id) {
        state = Object.assign({}, state, {
          task: state.tasks[i].status = action.status,
          statusHandlerIsVisible: !state.statusHandlerIsVisible
        })
      }
    }
  }
  return state
}
