// DB set up ===================================================================
var spicedPg = require('spiced-pg');
var db = spicedPg(process.env.DATABASE_URL || 'postgres:postgres:postgres@localhost:5432/teambased');
var path = require("path");

//ADD Task====
function addTask(task, day) {
  const query = `
  INSERT INTO tasks (tasks, day)
  VALUES ($1, $2)`
  const params = [task, day];
  return db.query(query, params)
};
exports.addTask = addTask;

//GET TASKS====
function getTasks() {
  const query = `
  SELECT tasks, day FROM tasks`
  return db.query(query).then((results) => {
    return results.rows
  })
};
exports.getTasks = getTasks;
