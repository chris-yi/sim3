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
    clientId: process.env.AUTH_CLIENTID,
    clientSecret: process.env.AUTH_SECRET,
    clientURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, exraParams, profile, done){

    return done(null, profile)
}))

passport.saveUninitialized(function(id, done) {
    done(null, id)
})
passport.deserializeUser(function(id, done) {
    done(null, id)
})



const PORT = 3005
app.listen(PORT, () => console.log(`Listing on port: ${PORT}`))