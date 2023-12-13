var express = require("express")                //installing/importing express
var bodyParser = require("body-parser")        //installing/importing body-parse
var mongoose = require("mongoose")             //installing/importing mongoose it is used to connect with mongodb

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://0.0.0.0:27017/mydb', {  
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

app.post("/sign_up", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;
    var data = {
        "name": name,
        "email": email,
        "phno": phno,
        "password": password
    }
   /* db.collection('users').insertOne(data, (err, collection) => {
        if (err) throw err;
        console.log("Record Inserted Successfully");
    });
    return res.redirect('signup_success.html');*/




/*var record_drop = {"name": "srujan"};
db.collection('users').deleteOne(record_drop, (err, collection) => {
    if (err) throw err;
    console.log("Record deleted Successfully");
});
return res.redirect('signup_success.html');*/

var myquery = { email: "cgvsgcvb" };
  var newvalues = { $set: { email: "arjun@45" } };

db.collection('users').updateOne(myquery, newvalues, (err, collection) => {
    if (err) throw err;
    console.log("Record Update Successfully");
});
return res.redirect('signup_success.html');






})

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');


    

}).listen(3000);

console.log("Listening on Port 3000");