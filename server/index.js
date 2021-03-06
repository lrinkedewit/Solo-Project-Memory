// ROLE: Main page of our back-end
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;
const router = require('./router');


// ROLE: Routing to router
app.use('/', router);

// ROLE: Catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

// ROLE: Global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred - Oops!' }, 
    }
    // NOTE: Object.assign functionality occurs
    const errorObj = Object.assign(defaultErr, err);
    // TEST: console.log(errorObj.log);
    res.status(errorObj.status);
    return res.status(errorObj.status).json(errorObj.message); // .json is using .send under the hood
  
  });

// ROLE: server port
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
  
module.exports = app;