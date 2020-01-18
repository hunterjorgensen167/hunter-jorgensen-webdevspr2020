var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))

//app.get('/', function(req, res) {
//    res.sendFile(__dirname + '/index.html');
//});
//app.use('/public', express.static(__dirname + '/public'))
app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})