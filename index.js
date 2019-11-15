var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/mobile/', function (req, res) {
    res.sendFile(__dirname + '/mobile/index.html');
});
app.get('/desktop/', function (req, res) {
    res.sendFile(__dirname + '/desktop/index.html');
});


io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('orientation', function (data) {
        // console.log(data);
        io.emit('orientation', data);
    });
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});