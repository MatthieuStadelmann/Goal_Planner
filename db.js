// DB set up ===================================================================
var spicedPg = require('spiced-pg');
var db = spicedPg(process.env.DATABASE_URL || 'postgres:postgres:postgres@localhost:5432/teambased');
var path = require("path");

//USERS MANAGEMEMT==============================================================
//Function insertNewUser===
function insertNewUser(first, last, email, password) {
  return db.query('INSERT INTO users (first, last, email, password) VALUES ($1, $2, $3, $4) RETURNING id', [
    first, last, email || null,
    password || null
  ]).then((results) => {
    return results.rows[0].id
  })
};
exports.insertNewUser = insertNewUser;
//function getHashed===
function getHashed(email) {
  const query = `SELECT password FROM users WHERE email = $1`;
  const params = [email];
  return db.query(query, params).then((results) => {
    return results.rows[0].password
  })
};
exports.getHashed = getHashed;

// function searchInfos===
function searchInfos(email) {
  const query = `SELECT id FROM users WHERE email = $1`
  const params = [email]
  return db.query(query, params).then((results) => {
    return results.rows[0]
  })
};
exports.searchInfos = searchInfos;

//TASKS MANAGEMENT==============================================================
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
  SELECT taskName, day, id, status FROM tasks`
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

//UPDATE task===
function updateTaskStatus(status, id) {
  const query = `
    UPDATE tasks
    set status = $1
    WHERE id = $2
    RETURNING status, id
  `
  const params = [status, id]
  return db.query(query, params).then((results) => {
    return results.rows[0]
  })
};
exports.updateTaskStatus = updateTaskStatus;

//delete All Tasks===
function deleteAll() {
  const query = `
  DELETE FROM tasks
  `
  return db.query(query)
};
exports.deleteAll = deleteAll;

function getPrioritizedTask(status) {
  console.log('inside getPrioritizedTask', status)
  const query = `
    SELECT taskName, day, id, status
    FROM tasks
    WHERE status = $1
  `
  const params = [status]
  return db.query(query, params).then((results) => {
   return results.rows[0]
  })
};
exports.getPrioritizedTask = getPrioritizedTask;
