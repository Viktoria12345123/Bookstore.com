const path = require('path');
const express = require('express');
const { configHbs } = require('./config/hbsConfig');
const { configExpress } = require('./config/expressConfig');
const { router } = require('./config/routesConfig');

const PORT = process.env.PORT || 3000;

const app = express();

configHbs(app);
configExpress(app);
app.set('views', path.join(__dirname, '../views'));

app.use('/', router);

app.listen(PORT);