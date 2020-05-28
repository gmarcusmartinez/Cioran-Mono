import passport from 'passport';
import keys from '../config/keys';
import { User } from '../models/User';
import { Strategy } from 'passport-google-oauth20';

passport.serializeUser((user: any, done) => {
  done(null, { _id: user._id, name: user.name, email: user.email });
});

passport.deserializeUser((_id, done) => {
  User.findById(_id).then((user) => done(null, user));
});

passport.use(
  new Strategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/api/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      let user;
      user = await User.findOne({ googleId: profile.id });
      if (user) {
        return done(undefined, user);
      }
      user = await new User({
        googleId: profile.id,
        name: profile._json.name,
        email: profile._json.email,
        photo: profile._json.picture,
      }).save();
      done(undefined, user);
    }
  )
);
