/**
 * Created by imafi on 12.04.2016.
 */
var express = require('express');
var middleware = require('./middleware');
var app = express();
var port = process.env.PORT || 3000;

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send("About us page");
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log("Express Server Started and Running on Port - " + port);
});