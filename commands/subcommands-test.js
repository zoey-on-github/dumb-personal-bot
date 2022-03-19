const { SlashCommandBuilder } = require('@discordjs/builders') 

const data = new SlashCommandBuilder()
    .setName("subcommands test")
    .setDescription("Test to see if subcommands work")
    .addSubcommmand(subcommand =>
        subcommand
        .setName("Test")
        .setDescription('first command option :p')
        )
        