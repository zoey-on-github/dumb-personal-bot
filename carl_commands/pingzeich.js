
const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("pingzeich")
    .setDescription("Pings zeich. bella requested this"),
    async execute(interaction) {
        await interaction.reply("<@!490681810548948992>")
    }
};