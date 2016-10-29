var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var massiveServer = massive.connectSync({
  connectionString: "postgres://postgres:soccer12@localhost/massive-demo"
  //connectionString: "postgres://localhost/massive-demo"
  //connectionString: "postgres://username:password@localhost/massive-demo"
});

var app = express();
app.use(bodyParser.json());

app.set('db', massiveServer);

var db = app.get('db'); //allow access to db in controllers

var port = 3000;

app.get('/incidents', function(req, res) {
  db.get_all_incidents(function(err, incidents){
    res.status(200).send(incidents);
  })
  // res.status(200).send({
  //   hello: 'World'
  // })
});

app.post('/incidents', function(req, res) {
  console.log('POST sighting');
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
