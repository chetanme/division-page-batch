var express = require('express')
  , fs = require('fs')
;

var app = express();

app.post('/', function(req, res){
    console.log('POST /');
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');
});

app.get('/', function(req, res){
    console.log('GET /');
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks from GET');
});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port)