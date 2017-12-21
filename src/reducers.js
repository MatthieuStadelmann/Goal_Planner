

const defaultState = {
  tasks: [],
  statusHandlerIsVisible: false,
  completedTasksAreVisible: false,
  clickedTask: [],
  selectedOption: 'workInProgress',
  priority: 'workInProgress'
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
          statusHandlerIsVisible: !state.statusHandlerIsVisible
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

  if (action.type == 'DELETE_TASKS') {
    state = Object.assign({}, state, {
      tasks: state.tasks = []
    })
  }

  if (action.type == 'HANDLE_PRIORITY') {
    state = Object.assign({}, state, {priority: action.priority})
  }

  if (action.type == 'SHOW_ARCHIVES') {
    state = Object.assign({}, state, {completedTasksAreVisible: !state.completedTasksAreVisible})
  }

  if (action.type == 'GET_ARCHIVES') {
    state = Object.assign({}, state, {archives: action.archives})
  }

  return state
}



//TO be continued...


//   if (action.type == 'GET_PRIORITY') {
//     console.log('action', action)
//     if (state.tasks == prevStates) {
//       state = Object.assign({}, state, {
//         tasks: state.tasks.filter(task => {
//           console.log('state.tasks', state.tasks)
//           return task.id == action.tasks.id
//         })
//
//       })
// }
//
//     // } else if (state.tasks !== prevStates) {
//     //   state = Object.assign({}, state, {
//     //     tasks: prevStates.filter(task => {
//     //       return task.id == action.tasks.id
//     //     })
//     //   })
//     // }
//   }
