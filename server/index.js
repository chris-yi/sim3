require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
      cors = require('cors');
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0')

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then( (db) => {
    app.set('db', db);
});

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENTID,
    clientSecret: process.env.AUTH_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, exraParams, profile, done){

    const db = app.get('db');

    db.find_user([profile._json.email]).then( user => {
        if (user[0]) {
            return done(null, user[0].email)
        } else {
            db.create_user([
                '',
                '',
                '',
                '',
                '',
                '',
                1,
                'January',
                2000,
                profile._json.email
            ]).then( user => {
                return done(null, profile._json.email)
            })
        }
    })
}));

passport.serializeUser( function(email, done) {
    done(null, email)
})
passport.deserializeUser( function(email, done) {
    done(null, email)
})

app.get('/api/auth/login', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: '/api/auth/login'
}))



const PORT = 3005
app.listen(PORT, () => console.log(`Listing on port: ${PORT}`))
