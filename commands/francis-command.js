const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setname("Francis's command")
    .setDescripition('francis made this.'),
async execute(interaction) {
    await interaction.reply('feaNAdics is thd bssat');
},
};