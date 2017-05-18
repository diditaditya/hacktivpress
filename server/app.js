const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();

let index = require('./routes/index');

mongoose.connect('mongodb://localhost/hacktivpress-didit');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use(passport.initialize());

app.use('/', index);

let port = 3000;
app.listen(port);
console.log(`listening to port ${port}`);
