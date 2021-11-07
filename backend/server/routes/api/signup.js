const User = require('../../models/User');
const bcyrpt = require('bcrypt');

module.exports = (app) => {
  app.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    const {
      name,
      password,
      verification
    } = body;
    let {
      email
    } = body;
    
    if (!name) {
      return res.send({
        success: false,
        message: 'Error: Name field cannot be empty.'
      });
    }
    if (!email) {
      return res.send({
        success: false,
        message: 'Error: email field cannot be empty.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: password field cannot be empty.'
      });
    }
    
    email = email.toLowerCase();
    
    User.find({
      email: email
    }, err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: email already exists'
        });
      }
      
      // create new user
      const newUser = new User();
      
      newUser.name = name;
      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.send({
          success: false,
          message: 'Error: Server error'
        });
       }
       return res.send({
         success: true,
         message: 'Signed up'
    });
  });
};
