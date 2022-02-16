// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/",function(req,res){
  var a = new Date().getTime();
  var b = new Date().toUTCString();
  res.json({unix:a, utc:b});
});

app.get("/api/:date?",function(req,res){
  var d = req.params.date;
  console.log(d);
  //var e = d
  //console.log(e);
  
  //console.log(x);
    var x = req.params.date.split("");
    console.log(x);
    if(x.includes('-')){
    var c = new Date(d).toUTCString();
    var a = new Date(d).getTime();
    console.log(c);
    console.log(a);

    if(c == "Invalid Date"){
      res.json({error: "Invalid Date"});
    }
    
    res.json({unix: parseInt(a), utc: c});
  }else if(x.includes(" ")){
    //console.log(d);
    var z = Date.parse(d);
    //console.log(z);
    if(z == "Invalid Date"){
    res.json({error: "Invalid Date"});
  }
    var t = new Date(z).toUTCString();
    //console.log(t);
    res.json({unix:z, utc: t})
  }
  else{
    //console.log(d);
  var y = parseInt(d);
  //console.log(y);
  var c = new Date(y).toUTCString();
  //console.log(c);
  if(y == "Invalid Date" || c =="Invalid Date"){
    res.json({error: "Invalid Date"});
  }else{
    res.json({unix: y, utc: c});
  }
  
  }
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
