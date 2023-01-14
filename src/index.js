const express= require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const indexRouter = require('./routes/index');




//setting
app.set('port',process.env.PORT || 5000);
app.set('json spaces', 2);  //to format the json    
app.use(express.static(path.join(__dirname, 'public')));



//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));   //to understand the data that the user sends
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users', require('./routes/users'));
app.use('/', indexRouter);


//starting the server
app.listen(app.get('port'), () => {

    console.log(`Server on port ${app.get('port')}`);
});