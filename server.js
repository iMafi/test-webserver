/**
 * Created by imafi on 12.04.2016.
 */
var express = require('express');
var app = express();
var port = 3000;

var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log('Private Route Hit');
        next();
    },
    logger: function(req, res, next) {
        var date = new Date().toString();
        console.log('Request on ' + date + ': ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send("About us page");
});

app.use(express.static(__dirname + '/public'));


app.listen(port, function() {
    console.log("Express Server Started and Running on Port - " + port);
});