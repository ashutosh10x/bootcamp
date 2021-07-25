const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// load the env variables
dotenv.config({ path: './config/config.env' });

// connect to Database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// dev logging middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// mount the route
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `app is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);

// handle unhandled promise rejection

process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error.message}`.red.bold);
  // close server & exit process
  server.close(() => {
    process.exit(1);
  });
});
