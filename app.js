var express = require('express');
var app     = express();
var http = require('http');


//bot steam
const botsteam = require('./lib/bot_steam');

//dados heros
const hero_dados = require('./lib/heros_data');

//start app
app.set('port', (process.env.PORT || 5000));


//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
