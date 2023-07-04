const { SlashCommandBuilder } = require('@discordjs/builders');
const { request }= require('undici')
module.exports = {
	data:new SlashCommandBuilder()
		.setName('zen')
		.setDescription("gives random github wisdom, minus the octocat"),
	async execute(interaction) {
		const zen = await request("https://api.github.com/zen") 
		const { text } = await zen.body.text();
		await interaction.reply(text);
	} }
