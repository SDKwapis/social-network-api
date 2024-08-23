const router = require('express').Router();

const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../controllers/userController');

// Route to get all users and create a new user
router.route('/')
  .get(getAllUsers)
  .post(createUser);

// Route to get, update, and delete a user by ID
router.route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// Route to add a friend to a user's friend list
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;