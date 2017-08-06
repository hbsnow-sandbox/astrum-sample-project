var http = require('http');
var connect = require('connect')
var serveStatic = require('serve-static')

var app = connect()
app.use(serveStatic('public/pattern-library'))

http.createServer(app).listen(3000)
