// const restaurantController = require('../controllers/restaurant.controller');
const {restaurantController } = require('../controllers');
const router = require('express').Router();

// /restaurants/:restaurant_id

module.exports = router
  .get('/',restaurantController.index)
  .post('/',restaurantController.create)
  .get('/:restaurant_id',restaurantController.show)
  .put('/:restaurant_id',restaurantController.update)
  .delete('/:restaurant_id',restaurantController.destroy);
