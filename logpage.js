var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object



// Endpoint to Get a list of users
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "logpage.json", 'utf8', function(err, data){
        console.log(data);
        res.send(data); 
    });
})

//Endpoint to get a single user by id
app.get('/getUsers/:id', function (req, res) {
    // First retrieve existing user list
    fs.readFile( __dirname + "/" + "logpage.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.send( JSON.stringify(user));
    });
 })


app.listen(9000,function (req,res) {
	console.log('running--')
})





// delete an user
 var id = 3;
 app.delete('/getUsers/deleteUser', function (req, res) {
    // First retrieve existing users
    fs.readFile( __dirname + "/" + "logpage.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 3];
        
       console.log( data );
       res.send( JSON.stringify(data));
    });
 })

// adding new user


var user = {
    "user5": {
        "id":5,
        "firstname":"Liudmyla",
        "lastname":"Nagorna",
        "email":"mila@gmail.com"
      },
} 

//The addUser endpoint
app.post('/addUser', function(req, res){
    //Step 2: read existing users
    fs.readFile(__dirname + "/" + "logpage.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        //Step 3: append user variable to list
        data["user5"] = user["user5"];
        console.log(data);
        res.send(JSON.stringify(data));
    });
})
