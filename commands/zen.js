const { SlashCommandBuilder } = require('@discordjs/builders');
const { request }= require('undici')
module.exports = {
	data:new SlashCommandBuilder()
		.setName('zen')
		.setDescription("gives random github wisdom, minus the octocat"),
	async execute(interaction) {
		const response = await request("https://api.github.com/zen") 
		const body = await response.text()
		await interaction.reply(body)
	} }
