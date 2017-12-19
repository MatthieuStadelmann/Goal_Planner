// DB set up ===================================================================
var spicedPg = require('spiced-pg');
var db = spicedPg(process.env.DATABASE_URL || 'postgres:postgres:postgres@localhost:5432/teambased');
var path = require("path");

//ADD Task====
function addTask(taskName, day) {
  const query = `
  INSERT INTO tasks (taskName, day)
  VALUES ($1, $2) RETURNING id`
  const params = [taskName, day];
  return db.query(query, params).then((results) => {
    return results.rows[0]
  })
};
exports.addTask = addTask;

//GET TASKS====
function getTasks() {
  const query = `
  SELECT taskName, day, id FROM tasks`
  return db.query(query).then((results) => {
    return results.rows
  })
};
exports.getTasks = getTasks;

//DELETE task===
function delTask(id) {
  const query = `
    DELETE FROM tasks
    WHERE id = $1
  `
  const params = [id]
  return db.query(query, params)
};

exports.delTask = delTask;
