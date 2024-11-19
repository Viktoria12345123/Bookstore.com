
const { urlencoded, static: staticHandler } = require('express');


function configExpress(app) {
app.use(urlencoded( {extended: true}));
app.use('/static', staticHandler('static'));
app.set('views', 'src/views');

}

module.exports = { configExpress };

