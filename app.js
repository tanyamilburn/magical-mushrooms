const express = require ('express');
const app = express ();
// require ('dotenv').config()
const userRoutes = require('./routes/user');
// import mongoose
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// load env variables
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose.connect(
  process.env.DATABASE,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});
//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
//routes middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})