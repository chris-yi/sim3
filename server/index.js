require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
      cors = require('cors');
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0')
