'use strict';
const express = require('express');
const app = express();
const router = require('./routes');
var port = process.env.PORT || 4000;

app.set('views', './views');
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
