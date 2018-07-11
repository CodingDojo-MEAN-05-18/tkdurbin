const restaurntRoutes = require('./restaurant.routes');
const authRoutes = require('./auth.routes');
const router = require('express').Router();
 //api/auth/login
module.exports = router
  .use('/auth', authRoutes)
  .use('/restaurants', restaurantRoutes);
