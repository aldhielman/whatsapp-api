const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Create a new client instance
const client = new Client({
    webVersionCache: {
        type: 'local',
        path:  "./data/web_cache"
    },
    authStrategy: new LocalAuth({
        dataPath: "./data"
    })
});

// When the client is ready, run this code (only once)
client.on('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

// Start your client
client.initialize();

module.exports = client