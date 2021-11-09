const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: -1
  },
  timestamp: {
    type: Date,
    default: Date.now()
  };
  verified: {
  type: Boolean,
  default: true
  }
});

module.exports = mongoose.model('UserSession', UserSessionSchema);
