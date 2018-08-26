let express = require('express'),
    path = require('path');
var app = express();
let server = require('http').Server(app);
var port = process.env.PORT || 8000;

// app.use(express.static(path.join(__dirname)));
app.use(express.static(__dirname + '/'));

app.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

// app.get('/', function(req, res, next) {
    // res.sendStatus(200);
// });

// app.get('/index.html', function(req, res,next){
//     res.sendFile(path.join(__dirname+"/index.html"));
// });

// app.post('/contact', function(req, res, next){
//     res.sendStatus(200);
// });

server.listen(port, function() {
    console.log("App is running on port " + port);
});