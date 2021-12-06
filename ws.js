const WebSocket = require('ws');

const wss = new WebSocket.WebSocketServer({ port: 3333 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    wss.clients.forEach(function (client){
        if(client !== ws && client.readyState === WebSocket.OPEN){
            client.send(data, {binary: false});
        }
    });
    console.log('received: %s', data);
  });
});