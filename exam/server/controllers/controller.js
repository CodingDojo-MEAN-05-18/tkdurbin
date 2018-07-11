const Restaurant = require('mongoose').model('Restaurant');

module.exports = {
  // get all of resource
  index(request, response) {
    Restaurant.find({})
      .then(restaurants => response.json(restaurants))
      .catch(console.log);
  },
  // create resource
  create(request, response) {
    Restaurant.create(request.body)
      .then(restaurant => response.json(restaurant))
      .catch(error => {
        response
          .status(500)
          .json(
            Object.keys(error.errors).map(key => error.errors[key].message)
          );
      });
  },
  // get a single resource
  show(request, response) {
    Restaurant.findById(request.params.restaurant_id)
      .then(restaurant => response.json(restaurant))
      .catch(console.log);
  },
  // update a resource
  update(request, response) {
    Restaurant.findByIdAndUpdate(request.params.restaurant_id, request.body, { new: true })
      .then(restaurant => response.json(restaurant))
      .catch(error => {
        response
          .status(500)
          .json(
            Object.keys(error.errors).map(key => error.errors[key].message)
        );
    });
  },
  // destroy resource
  destroy(request, response) {
    Restaurant.findByIdAndRemove(request.params.restaurant_id)
      .then(restaurant => response.json(restaurant))
      .catch(console.log);
  },
}
