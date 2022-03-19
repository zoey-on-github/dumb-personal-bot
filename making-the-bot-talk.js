const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const channel = client.channels.cache.get("952081516010303528");

channel.send("<!@490681810548948992> > about time you dumb robot fox \n not cool zeich ;w;");

// Login to Discord with your client's token
client.login(token);

