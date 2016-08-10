'use strict';

const config = require('../config');
const mongoose = require('mongoose');

mongoose.connect(config.dbURI);

mongoose.connection.on('error', error => {
  console.log('DB error :' + error);
});

module.exports = {
  mongoose
}
