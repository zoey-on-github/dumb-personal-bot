const { SlashCommandBuilder } = require('@discordjs/builders'); 
const { MessageEmbed } = require('discord.js');

    
module.exports = {
    data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Replies with user info!'),
    async execute(interaction) {
    const helpEmbed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Userinfo")
        .setDescription("Gives user info!")
        .setTimestamp()
        .addFields(
            {name: "Your id", value: `${interaction.user.id}`},
            {name: "Your username", value: `${interaction.user.username}`},
            {name: "Your tag", value: `${interaction.user.tag}`},
            {name: "User created at date", value: `${interaction.user.createdAt}`}
        )
        await interaction.reply({ embeds: [helpEmbed] });
    }
}