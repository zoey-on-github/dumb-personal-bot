const { SlashCommandBuilder } = require('@discordjs/builders');
const { request }= require('undici')
module.exports = {
	data:new SlashCommandBuilder()
		.setName('octocat')
		.setDescription("gives random octocat wisdom"),
	async execute(interaction) {
		const response = await request("https://api.github.com/octocat") 
		const { file } = await response.text().then(JSON.stringify(response)).then(response => response.json())
		await interaction.reply({files: [file]})}
	}
