//const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const channel = client.channels.cache.get("952081516010303528");

channel.send("test");

// Login to Discord with your client's token
client.login(token);

