const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use(homeRoutes);

app.listen(3000);
