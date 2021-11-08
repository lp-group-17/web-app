const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    default: ''
  },
  lastname: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  verified: {
    type: Boolean,
    default: true
  }
});

UserSchema.methods.generateHash = function(passwordhash) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
   return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
