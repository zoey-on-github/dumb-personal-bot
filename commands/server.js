const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Replies with server info!'),
  async execute(interaction) {
    const ServerEmbed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Userinfo")
    .setDescription("Gives user info!")
    .setTimestamp()
    .addFields(
      {name: "Server name", value: `${interaction.guild.name}`},
      {name : "Total members", value: `${interaction.guild.memberCount}`},
      {name: "Server creation", value: `${interaction.guild.createdAt}`}
    )
    await interaction.reply({embeds: [ServerEmbed]});
  },
};
