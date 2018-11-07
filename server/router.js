const Authentication = require('./controllers/authentication');
const passport = require('passport');
const passportService = require('./services/passport');


const requireAuth = passport.authenticate('jwt', {
  session: false // we don't use session (token instead)
});

const requireSignin = passport.authenticate('local', {
  session: false
})

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' })
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}