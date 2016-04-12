module.exports =  {
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
