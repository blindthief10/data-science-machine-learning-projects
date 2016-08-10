'use strict';
const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
  res.render('login', {setLoginTitle: 'Login Page'});
})

route.get('/chat', (req, res, next) => {
  res.render('chatroom');
})

route.get('/rooms', (req, res, next) => {
  res.render('rooms');
})

route.get('*', (req, res, next) => {
  res.status(404);
  res.sendFile(process.cwd() + '/views/404.htm');
})

module.exports = route;
