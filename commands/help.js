const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle("Help")
    .setDescription("Explains server commands")
    .setTimestamp()
    //TODO: add the commands im missing from this
    .addFields(
        { name: "Modtest", value: "checks if you are a mod" },
        { name: "Serverinfo", value: "Gives you info about the server"},
        { name: "Ping", value:"Responds with pong!"},
        { name: "userinfo", value: "Responds with user info!"},
        { name: "francis-command", value:"francis made this."}
    )
module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Explains commands!'),
        async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] });
    }
};