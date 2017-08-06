var http = require('http');
var connect = require('connect')
var serveStatic = require('serve-static')

var app = connect()
app.use(serveStatic('doc'))

http.createServer(app).listen(3000)
