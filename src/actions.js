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
