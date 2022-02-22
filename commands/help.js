const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Explains commands!'),
    async execute(interaction) {
        await interaction.reply(`Help: replies with help\n Userinfo: gives user info\n Serverinfo:Replies with server user count and more info\n `);
    }
}