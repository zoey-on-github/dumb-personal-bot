const { SlashCommandBuilder} = require('@discordjs/builders');
const fetch = require('node-fetch');
module.exports = {
	data:new SlashCommandBuilder()
		.setName('octocat')
		.setDescription("gives random octocat wisdom"),
	async execute(interaction) {
		const response = await fetch("https://api.github.com/octocat") 
		const body = await response.text()
		await interaction.reply(body)
	}
}