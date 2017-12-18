import axios from './axios';

export function addTask(task, day) {
  var obj = {
    task: task,
    day: day
  }
  return axios.post('/addTask', obj).then(() => {
    console.log("MY OBJ", obj)
    return {type:'ADD_TASK', obj}
  })
};

export function getTasks() {
  return axios.get('/getTasks').then((data) => {
    return {type: 'GET_TASKS', tasks: data.data.tasks};
  })
};

export function deleteTask(task) {
  return axios.post('/deleteTask').then((results) => {
    console.log(results)
   return {type: 'DELETE_TASK', task: task}
  })
};
