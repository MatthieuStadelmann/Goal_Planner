const express = require('express');
const app = express();
const compression = require('compression');
const db = require('./db');
const bodyParser = require('body-parser');
const auth = require('./auth');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');

app.use(compression());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cookieSession({
  name: `session`,
  secret: 'LIVE LONG EAT DÖNER',
  maxAge: 1000 * 60 * 60 * 24 * 14
}));
app.use(csurf());

app.use(function(req, res, next) {
  res.cookie('mytoken', req.csrfToken());
  next();
});

if (process.env.NODE_ENV != 'production') {
    app.use('/bundle.js', require('http-proxy-middleware')({
        target: 'http://localhost:8081/'
    }));
}
app.use(express.static('./public'));

//USERS MANAGEMEMT==============================================================

//First page route ===
app.get('/welcome/', function(req, res) {
  if (req.session.user) {
    res.redirect('/')
  } else {
    res.sendFile(__dirname + '/index.html');
  }
});
//Registration route ===
const hashPassword = auth.hashPassword;
const insertNewUser = db.insertNewUser;
app.post('/register', (req, res) => {
  var first = req.body.first;
  var last = req.body.last;
  var email = req.body.email;
  var password = req.body.password;
  hashPassword(password).then((hashedpassword) => {
    insertNewUser(first, last, email, hashedpassword).then((id) => {
      req.session.user = {
        id: id,
        first: first,
        last: last,
        email: email
      };
      res.json({success: true})
    }).catch((err) => {
      console.log("HEY", err)
    })
  }).catch((err) => {
    console.log("HEY2", err)
  })
});
//Login route ===
const checkPassword = auth.checkPassword;
const getHashed = db.getHashed;
const searchInfos = db.searchInfos;

app.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  getHashed(email).then((hashedPassword) => {

    checkPassword(password, hashedPassword).then((doesMatch) => {

      if (doesMatch) {
        searchInfos(email).then((results) => {

          req.session.user = {
            id: results.id
          }
          res.json({success: true})
        });
      } else {}
    }).catch((err) => {
      console.log(err);
    })
  })
});

//TASK MANAGEMEMT===============================================================

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
  let taskId = req.params.taskId;
  delTask(taskId).then(() => {
    res.json({success:true})
  }).catch((err) => {
    console.log(err)
  })
});

//Update Status===
const updateTaskStatus = db.updateTaskStatus;
app.post('/updateTaskStatus/:taskId', (req, res) => {

  let taskId = req.params.taskId;
  let selectedValue = req.body.taskStatus;
  let status;

  if (selectedValue == 'done') {
      status = 1;
  }
  if (selectedValue == 'workInProgress') {
      status = 2;
  }
  if (selectedValue == 'emergency') {
      status = 3;
  }

  updateTaskStatus(status, taskId).then((results) => {
    res.json({
      status: results.status,
      id: results.id
    })
  }).catch((err) => {
    console.log(err)
  })
});

app.get('/logout/', (req, res) => {
  req.session = null;
  res.redirect('/');
});

app.get('*', function(req, res) {
  if (!req.session.user) {
    res.redirect('/welcome/')
  } else {
    res.sendFile(__dirname + '/index.html');
  }
});

app.listen(8080, function() {
    console.log("I'm listening.")
});
