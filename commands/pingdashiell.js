
const { SlashCommandBuilder } = require('@discordjs/builders');
const { execute } = require('../vscode-vfs/zoey-on-github/dumb-personal-bot/commands/help');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(pingdashiell)
    .setDescription("Pings dashiell. enzo requested this"),
    async execute(interaction) {
        await interaction.reply("@!490681810548948992")
    }
};