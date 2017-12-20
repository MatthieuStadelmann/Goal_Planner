import axios from './axios';

export function addTask(task, day) {
  var newTask = {
    taskname: task,
    day: day
  }
  return axios.post('/addTask', newTask).then((data) => {
    console.log('newTask', newTask)
    newTask.id = data.data.id;
    return {type:'ADD_TASK', newTask}
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
  console.log("MY TASk", task)
  return {type: 'HANDLE_TASK', task: task}
};

export function handleRadioChange(selectedOption) {
console.log('inside handleRadioChange', selectedOption)
  return {type: 'HANDLE_RADIO_CHANGE', selectedOption: selectedOption}
};

export function submitOption(option, taskId) {

  var status = {
    taskStatus: option
  }
  return axios.post('/updateTaskStatus/' + taskId, status).then((results) => {
  return {
    type: 'UPDATE_TASK_STATUS',
    status: results.data.status,
    id: results.data.id
   }
  })
}
