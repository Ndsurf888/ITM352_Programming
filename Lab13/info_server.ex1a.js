var express = require('express'); //set up basic webserver
var app = express();
app.all('*', function(request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
    response.send(request.method + ' to path ' + request.path);
});