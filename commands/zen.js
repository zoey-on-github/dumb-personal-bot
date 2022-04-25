const { SlashCommandBuilder} = require('@discordjs/builders');
const fetch = require('node-fetch');
module.exports = {
	data:new SlashCommandBuilder()
		.setName('zen')
		.setDescription("gives random github wisdom, minus the octocat"),
	async execute(interaction) {
		const response = await fetch("https://api.github.com/zen") 
		const body = await response.text()
		await interaction.reply(body)
	}
}