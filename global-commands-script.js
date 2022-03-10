//essentially the same thing as the deploy-commands script, except for global commands, although you should be warned that global comamnds take a few hours to fully register unlike guild commands, so if you wanna test guild commands, make some tea or read a book or something. or just continue coding, idk im a comment, not a cop.
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json');
const fs = require('fs');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '932145140993257472';
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
	Routes.applicationCommands(clientId),
	{ body: commands },
    );


		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
