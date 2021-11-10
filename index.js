const express = require('express');
const app = express();
const port = 8000;
app.use('/user', require('./routes/UserRoutes'));
app.listen(port, () => {  console.log('We are live on ' + port);});