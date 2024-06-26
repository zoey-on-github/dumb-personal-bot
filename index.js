// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path')
const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command){ 
	client.commands.set(command.data.name, command); 
	} else {
		console.log(`[WARNING] the command from ${filePath} is missing a required property -w-`)
	}
}
// When the client is ready, run this code (only once)
client.once(Events.ClientReady, c  => {
	console.log(`Ready!, logged in as ${c.user.tag} uwu`);
	client.user.setActivity('Waiting for commands');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command)
	{
		console.error(`no command matching ${interaction.commandName} could be found ;w;`);
	return;
	}
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});



// Login to Discord with your client's token
client.login(token);


