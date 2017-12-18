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
  let task = req.body.task;
  let day = req.body.day;
  addTask(task, day).then(() => {
    res.json({success: true})
  }).catch((err) => {
    console.log(err)
  })
});

//GET TASKS===
const getTasks = db.getTasks;
app.get('/getTasks', (req, res) => {
  getTasks().then((tasks) => {
    res.json({tasks: tasks})
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
