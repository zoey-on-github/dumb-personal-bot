const { SlashCommandBuilder} = require('@discordjs/builders');
const permissions = [
  {
  id: '913589292369072178',
  type: 'USER',
  permission: true,
  }
];
await command.permissions.add({ permissions });
//I have no idea if this code works or not. Good luck. 
module.exports = {
  data: new SlashCommandBuilder()
       .setName('Modtest')
       .setDescription('Basic check to see if someone is a mod or not'),
       async execute(interaction) {
       if (({ permissions })= true) {
           await interaction.reply("you are a mod! :D");
       } else {
         await interaction.reply("you are not a mod. ;w;");
       }
       } 
      }
