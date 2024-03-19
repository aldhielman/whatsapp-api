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
    }),
    puppeteer:{
        headless: true,
        args: [
            '--no-sandbox',
            'disable-setuid-sandbox',
        ]
    }
});

// When the client is ready, run this code (only once)
client.on('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

// When the client received QR-Code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

// When the client received QR-Code
client.on('message_create', message => {
    console.log(message)
});



// Start your client
client.initialize();

module.exports = client