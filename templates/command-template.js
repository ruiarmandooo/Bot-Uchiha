// Command Template Structure

const CommandManager = {
    name: 'commandName',
    description: 'Description of the command',
    options: [
        {
            name: 'optionName',
            type: 'STRING',
            description: 'Description of the option',
            required: true,
        },
    ],
    execute(interaction) {
        // Command execution logic
        const optionValue = interaction.options.getString('optionName');
        interaction.reply(`You selected: ${optionValue}`);
    },
};

module.exports = CommandManager;