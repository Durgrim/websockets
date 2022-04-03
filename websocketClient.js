const port = process.env.PORT || 3000;
const WS = new WebSocket(`ws://localhost:${port}`);

WS.onmessage = (payload)=> {
    let h1 = document.createElement('h1');
    h1.innerText = payload.data;
    document.querySelector('div.messages').appendChild(h1);
};

WS.onopen = ()=> {
    document.querySelector('h1').innerHTML = 'Connected to Server';
};

WS.onclose = ()=> {
    document.querySelector('h1').innerHTML = 'Disconnected to Server';
};

document.forms[0].addEventListener('submit', ()=> { 
    event.preventDefault();
    WS.send(document.getElementById('message').value);
});
