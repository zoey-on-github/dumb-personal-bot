const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const exampleEmbed = new MessageEmbed()
    .setcolor('#0099ff')
    .setTitle("Help")
    .setAuthor("Dumb Personal Bot")
    .setDescription("Explains server commands")
    .setTimestamp()
    .addFields(
        { name: "Modtest", value: "checks if you are a mod" },
        { name: "Serverinfo", value: "Gives you info about the server"},
        { name: "Ping", value:"Responds with pong!"},
        { name: user}
    )
module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Explains commands!'),
    //TODO:finish this json
        async execute(interaction) {
        await interaction.reply({ embeds: [embed] });
    }
}