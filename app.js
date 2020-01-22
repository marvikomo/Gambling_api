const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const moment = require('moment');
const http = require('http');
const app = express();

app.use(cors());

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(helmet());

// express session middleware
app.use(session({
    secret: 's3cr3t',
    resave: true,
    saveUninitialized: true
}));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// api routes
let gamblingApi = require('./routes/gambling');

app.use('/api/v1', gamblingApi);


// set port
const port = process.env.PORT || 9900;

//const server = http.createServer(app);
// start server
app.listen(port, function(){
    console.log(`Server started on port ${port}...`);
});