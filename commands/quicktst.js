
const { SlashCommandBuilder, ChannelType, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back')
			// Ensure the text will fit in an embed description, if the user chooses that option
			.setMaxLength(2_000)),
/*	.addBooleanOption(option =>
		option.setName('embed')
			.setDescription('Whether or not the echo should be embedded')),
			*/
async execute(interaction) {
	const echo = interaction.options.getString('input')

	//const output = eval(echo)
await interaction.reply(echo);
}
}

