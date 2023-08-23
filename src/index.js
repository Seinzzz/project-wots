// import Discord from "discord.js";
//token bot
// Require the necessary discord.js classes
import 'dotenv/config';
import { getQuotes } from './function.js';
import commands from './commands.js';
import { authorEmbed, commandsHelpEmbed } from './embeds.js';
import { Client, Events, REST, GatewayIntentBits, Routes } from 'discord.js';
import { setTimeout } from 'timers/promises';

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
    // IntentsBitField.Flags.GuildMembers,
    // IntentsBitField.Flags.GuildMessages,
    // IntentsBitField.Flags.MessageContent,
  ]
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
    body: commands
  });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}

client.on('interactionCreate', async c => {
  if (!c.isChatInputCommand() || c.user.bot) return;
  // console.log(c);
  //get commandName
  let inputCommand = c.commandName;

  // COMMANDS
  switch (inputCommand) {
    case 'ping':
      console.log('workkk');
      await c.reply({ content: 'Pong!', ephemeral: true });
      await setTimeout(2000);
      await c.editReply('Pong again!');
      break;
    case 'hello':
      await c.reply({
        content: `HAI ${c.user.globalName} TOTT!!`,
        ephemeral: true
      });
      break;
    case 'info':
      await c.reply(`Bot ini dibuat dengan sedikit abstrak.`);
      break;
    case 'author':
      await c.reply({ embeds: [authorEmbed], ephemeral: true });
      break;
    case 'help':
      await c.reply({ embeds: [commandsHelpEmbed] });
      break;
    case 'quotes':
      // await c.reply('test');
      const input = c.options.get('language').value; // Ambil input dari opsi first

      // input check
      if (input === 'id' || input === 'en') {
        const text = getQuotes(input).text;
        const source = getQuotes(input).source;
        c.reply(`>>> *"${text}"*\n\n *-${source}*`);
        // await c.reply(`>>> ${text}`);
      } else {
        await c.reply('>>> Wrong input!, Try again with ***id/en***');
      }
      break;
    default:
      break;
  }
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);
