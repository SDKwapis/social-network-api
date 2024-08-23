const router = require('express').Router();

const {
  createThought,
  getAllThoughts,
  getThoughtById,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../controllers/thoughtController.js');

// Route to get all thoughts and create a new thought
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// Route to get, update, and delete a thought by ID
router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Route to add a reaction to a thought
router.route('/:thoughtId/reactions')
  .post(addReaction);

// Route to remove a reaction from a thought
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;