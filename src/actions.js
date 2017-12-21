import axios from './axios';

export function addTask(task, day) {
  var newTask = {
    taskname: task,
    day: day
  }
  return axios.post('/addTask', newTask).then((data) => {
    newTask.id = data.data.id;
    return {type: 'ADD_TASK', newTask}
  })
};

export function getTasks() {
  return axios.get('/getTasks').then((data) => {
    return {type: 'GET_TASKS', tasks: data.data.tasks};
  })
};

export function deleteTask(taskId) {
  return axios.post('/deleteTask/' + taskId).then((results) => {
    return {type: 'DELETE_TASK', taskId: taskId}
  })
};

export function handleTask(task) {
  return {type: 'HANDLE_TASK', task: task}
};

export function handleRadioChange(selectedOption) {
  return {type: 'HANDLE_RADIO_CHANGE', selectedOption: selectedOption}
};

export function submitOption(option, taskId) {

  var status = {
    taskStatus: option
  }

  return axios.post('/updateTaskStatus/' + taskId, status).then((results) => {
    return {type: 'UPDATE_TASK_STATUS', status: results.data.status, id: results.data.id}
  })
}

export function deleteAll() {
  return axios.get('/deleteAll/').then(() => {
    return {type: 'DELETE_TASKS'}
  })
}

export function archiveDone() {
  return axios.post('/archivedDone')
}

export function showArchives() {
  return {type: 'SHOW_ARCHIVES'}
}

export function getArchives() {
  return axios.get('/getArchives').then((results) => {
    return {type: 'GET_ARCHIVES', archives: results.data.archives}
  })
}

//To be continued

// export function handlePriority(priority) {
//   return {type: 'HANDLE_PRIORITY', priority: priority}
// }

// export function submitPriority(currentPriority) {
//   var newPriority = {
//     priority: currentPriority,
//
//   }
//   return axios.post('/sortTaskByPriority', newPriority).then((results) => {
//     return {type: 'GET_PRIORITY', tasks: results.data.tasks}
//   })
// }
