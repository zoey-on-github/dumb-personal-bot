//deploys guild commands, and I should note: THIS ONLY WORKS ON THE GUILD YOU ASSIGN IT TO, if you want global commands, USE THE GLOBAL COMMANDS SCRIPT
const fs = require('node:fs');
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const path = require('node:path');

const commands = [];
const commandsPath = path.join(__dirname, 'carl_commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./carl_commands/${file}`)
	commands.push(command.data.toJSON());
}



const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
