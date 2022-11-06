const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('markdown')
    .setDescription('this is a command about markdown'),
    async execute(interaction) {
        await interaction.reply("***markdown*** is ~~not~~ `cool` _as_ hell")
    }
}