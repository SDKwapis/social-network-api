const { Schema, model } = require('mongoose');
const thought = require('./Thought'); 

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^\S+@\S+\.\S+$/, 'Enter a valid email'], // regex for email
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought', // Reference to the Thought model
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', // Self-reference to the User model
      },
    ],
  }
);

const User = model('User', userSchema);

module.exports = User;
