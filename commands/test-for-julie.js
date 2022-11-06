const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription('just a basic test for me, julie'),
    async execute (interaction) {
       if (interaction.member.roles.cache.has('911311450688077824')){
         await interaction.reply("ignore this. this command only does something useful on julie's end, this text is just here because discord needs me to send *some* kind of message with a command").then(console.log('this is a message'));
        } else {
            await interaction.reply("you aren't julie. you don't *need* this command")
        }
    }
}