const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(), // Default to a new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280, // 280 character maximum
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(), // Getter to format the timestamp
    },
  },
  {
    toJSON: {
      getters: true, // Enable getters so the formatted timestamp is returned
    },
    _id: false,
  }
);

module.exports = reactionSchema;
