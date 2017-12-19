const express = require('express');
const app = express();
const compression = require('compression');
const db = require('./db');
const bodyParser = require('body-parser');


app.use(compression());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


if (process.env.NODE_ENV != 'production') {
    app.use('/bundle.js', require('http-proxy-middleware')({
        target: 'http://localhost:8081/'
    }));
}

app.use(express.static('./public'));


//ADD TASK===
const addTask = db.addTask;
app.post('/addTask', (req, res) => {
  let task = req.body.taskname;
  let day = req.body.day;
  addTask(task, day).then((results) => {
    res.json({id: results.id})
  }).catch((err) => {
    console.log(err)
  })
});

//GET TASKS===
const getTasks = db.getTasks;
app.get('/getTasks', (req, res) => {
  getTasks().then((tasks) => {
    console.log('GET TASK', tasks)
    res.json({tasks: tasks})
  }).catch((err) => {
    console.log(err)
  })
});

//Delete TASKS===
const delTask = db.delTask;
app.post('/deleteTask/:taskId', (req, res) => {
  let taskId = req.params.taskId
  delTask(taskId).then(() => {
    res.json({success:true})
  }).catch((err) => {
    console.log(err)
  })
});

app.get('*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening.")
});
