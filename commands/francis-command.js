const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("francis-command")
    .setDescription('francis made this.'),
async execute(interaction) {
    await interaction.reply('feaNAdics is thd bssat');
},
};