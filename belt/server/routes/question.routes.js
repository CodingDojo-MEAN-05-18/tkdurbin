// const questionController = require('../controllers/question.controller');
const { questionController } = require('../controllers');
const router = require('express').Router()

module.exports = router
  .get('/', questionController.index)
  .post('/', questionController.create)
  .get('/:question_id', questionController.show)
  .put('/:question_id', questionController.update)
  .delete('/:question_id', questionController.destroy)
