const RPC = require('discord-rpc');
const config = require('./config.json');
const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: config.activity.details,
            state: config.activity.state,
            assets: {
                large_image: config.activity.assets.image.large.name, // optional
                large_text: config.activity.assets.image.large.text, // optional
                small_image: config.activity.assets.image.small.name, // optional
                small_text: config.activity.assets.image.small.text // optional
            },
            buttons: [
                {
                    label: config.activity.buttons.v1.title || 'Discord',
                    url: config.activity.buttons.v1.url || 'https://discord.com'
                },
                {
                    label: config.activity.buttons.v2.title  || 'Discord',
                    url: config.activity.buttons.v2.url || 'https://discord.com'
                }
                // ...
            ],
            timestamps: { start: Date.now() }, // optional
            instance: true
        }
    })
})

client.login({ clientId: config.clientId }).catch(console.error);