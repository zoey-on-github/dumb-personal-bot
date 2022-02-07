const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
  data: new SlashcommandBuilder()
    .setName('userinfo')
    .setDescription('gives user info'),
  async execute(interaction) {
    await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
  },
};
