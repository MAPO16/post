var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// Configure MySQL connection
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'servicio2',
	password: 'servicio2.123',
	database: 'empleado'
  })

//Establish MySQL connection
connection.connect(function(err) {
   if (err) 
      throw err
   else {
       console.log('Connected to MySQL');
       // Start the app when connection is ready
       app.listen(3000);
       console.log('Server listening on port 3000');
 }
});

app.use(bodyParser.json())

app.get('/rest/empleados', function(req, res) {
  res.sendFile(path.join(__dirname+ '/myfile.html'));
});

app.post('/rest/empleados', function(req, res) {

var nombre  = req.body;
console.log(nombre);

connection.query('INSERT INTO empleados SET ?', nombre , function(err,result) {
  if(err) {
     res.send('Error');
  }
 else {
     res.send('Success');
  }
});
});