const Question = require('mongoose').model('Question');

module.exports = {
  index(request, response) {
    Question.find({})
      .then(questions => response.json(questions))
      .catch(console.log)
  },
  create(request, response) {
    Question.create(request.body)
      .then(question => response.json(question))
      .catch(error => {
        response
          .status(500)
          .json(
            Object.keys(error.errors)
              .map(key => error.errors[key].message)
          );
      });
  },
  show(request, response) {
    Question.findById(request.params.question_id)
      .then(question => response.json(question))
      .catch(console.log);
  },
  update(request, response) {
    Question.findByIdAndUpdate(request.params.question_id, request.body, { new : true})
      .then(question => response.json(question))
      .catch(console.log)
  },
  destroy(request, response) {
    Question.findByIdAndRemove(request.params.question_id)
       .then(question => response.json(question))
       .catch(console.log);
  },

};
