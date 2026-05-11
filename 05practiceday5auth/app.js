const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', function(req, res){
  res.render('index');
})

app.post('/create', function(req, res){
  let {username, email, password, age} = req.body;

  bcrypt.genSalt(10, function(err,salt){

    bcrypt.hash(password, salt, async function(err, hash){
          let createUser = await userModel.create({
            username, 
            email, 
            password: hash,
            age
          })

          let token = jwt.sign({email:email}, "shhhhhshhh");
          res.cookie('token', token);
          res.send(createUser);
    });
  });

});

app.get('/login', async function(req, res){
  // let {email, password} = req.body; 
  res.render('login');
});
  
app.post('/login', async function(req, res){

  let user = await userModel.findOne({
    email: req.body.email
  });

  if(!user){
    return res.send('Something went wrong');
  }

  bcrypt.compare(req.body.password, user.password, function(err, result){

    if(result){
      let token = jwt.sign({email: user.email}, "shhhhhshhh");
      res.cookie('token', token);
         
      res.send("Welcome " + user.username);
    }
    else{
      res.send("Invalid credentials");
    }

  });

});

app.get("/logout", function(req, res){
  res.cookie('token' , "");
  res.send('Logged out successfully');
  res.redirect('/');
});

app.listen(3000, function(){
   console.log('Server is running on port 3000');
})
