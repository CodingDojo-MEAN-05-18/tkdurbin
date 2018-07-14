const { authController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .post('/login', authController.login)
  .post('/register', authController.register)
  //.post('/#index'), authController.landing)
  .delete('/logout', authController.logout);
