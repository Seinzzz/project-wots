// import Discord from "discord.js";
//token bot 
// Require the necessary discord.js classes
const { Client, Events, REST, GatewayIntentBits, Routes } = require('discord.js');
const { TOKEN, CLIENT_ID } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});


const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}


client.on('interactionCreate', async interaction => {
  console.log("workkk");
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('HAI JINGKONTOTT!!!');
  }
});

// Log in to Discord with your client's token
client.login(TOKEN);