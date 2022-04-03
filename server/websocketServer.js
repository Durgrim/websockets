const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({port: 3000});

WSS.on('connection', (ws)=>{
    // Conected user counter. Restart on connection
    let connected = 0;
    WSS.clients.forEach((client)=>{
        connected++;
    });

    ws.on('message', (message)=>{
        WSS.clients.forEach((client)=>{
            client.send(message.toString());
        });
    });
    console.log(connected,' users connected');
});
