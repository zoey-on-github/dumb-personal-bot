const { SlashCommandBuilder } = require('@discordjs/builders');
//I have no idea if this code works or not. Good luck. 
module.exports = {
  data: new SlashCommandBuilder()
       .setName('fendforyourself')
       .setDescription('a one time little command for me, you shouldnt use it'),
       async execute(interaction) {
       if (interaction.member.roles.cache.has('911311450688077824')) {
           await interaction.reply("<@!490681810548948992> \n > about time you dumb robot fox \n not cool zeich ;w");
       } else {
         await interaction.reply("you arent me. go away");
       };
      },
};
