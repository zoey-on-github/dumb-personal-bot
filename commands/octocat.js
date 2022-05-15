const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
module.exports = {
	data:new SlashCommandBuilder()
		.setName('octocat')
		.setDescription("gives random octocat wisdom"),
	async execute(interaction) {
		const response = await fetch("https://api.github.com/octocat") 
		const { file } = await response.text().then(JSON.stringify(response)).then(response => response.json())
		await interaction.reply({files: [file]})}
	}
