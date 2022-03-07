const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
       .setName('Modtest')
       .setDescription('Basic check to see if someone is a mod or not'),
       //TODO: finish this with roles once I get home.

       async execute(interaction) {
           

       }

