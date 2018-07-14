const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    const { email, password } = request.body;
    User.findOne({ email })
    .then(async user => {
      const valid = await User.validatePassword(password, user.password);

      if (!valid) {
        throw new Error('password do not match');
      }
      // .then(user => {
        // if (!user) { throw Error(); }

       //  return User.validatePassword(password, user.password)
          // .then(() => {
            // handle login
            completeLogin(request, response, user);

      })
      .catch(_error => {
        console.log('error message', error.message);
        response.status(403).json({ error: 'ueser/password combination not found' });
      });
  },
  register(request, response) {
    console.log('registering user', request.body);
    User.create(request.body)
      .then(user => {
        //handle login
        completeLogin(request, response, user);
      })
      .catch(console.log);
  },
  logout(request, response) {
    request.session.destroy();

    response.clearCookie('userID');
    response.clearCookie('expiraton');
    response.json(true);
  },
  // landing(request, response) {
  //  request.session.user = user.toObject();
  // }
};

function completeLogin(request, response, user) {
  request.session.user = user.toObject();
  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);
  response.json(user);
}
