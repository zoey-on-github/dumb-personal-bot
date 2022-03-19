const { SlashCommandBuilder} = require('@discordjs/builders');
//I have no idea if this code works or not. Good luck. 
module.exports = {
  data: new SlashCommandBuilder()
       .setName('modtest')
       .setDescription('Basic check to see if someone is a mod or not'),
       async execute(interaction) {
       if (interaction.member.roles.cache.has('913589292369072178')) {
           await interaction.reply("you are a mod! :D");
       } else {
         await interaction.reply("you are not a mod. ;w;");
       };
      },
};
