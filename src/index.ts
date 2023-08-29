// import Discord from "discord.js";
//token bot
// Require the necessary discord.js classes
import 'dotenv/config'
import commands from './command'
import { authorEmbed, commandsHelpEmbed } from './embeds'
import {
  Client,
  ClientEvents,
  REST,
  Routes,
  ApplicationCommandData,
  GatewayIntentBits,
} from 'discord.js'

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
// client.once(ClientEvents.ready, c => {
//   console.log(`Ready! Logged in as ${c.user!.tag}`)
// })

const rest = new REST({ version: '10' }).setToken(process.env.DC_TOKEN!)

try {
  console.log('Started refreshing application (/) commands.')

  rest.put(Routes.applicationCommands(process.env.CLIENT_ID!), {
    body: commands,
  })

  console.log('Successfully reloaded application (/) commands.')
} catch (error) {
  console.error(error)
}

client.on('interactionCreate', async c => {
  if (!c.isCommand()) return
  // console.log(c);
  //get commandName
  let inputCommand = c.commandName

  switch (inputCommand) {
    case 'ping':
      console.log('workkk')
      await c.reply({ content: 'Pong!', ephemeral: true })
      break
    case 'hello':
      await c.reply({
        content: `HAI ${c.user!.username} TOTT!!`,
        ephemeral: true,
      })
      break
    case 'info':
      await c.reply(`Bot ini dibuat dengan sedikit abstrak.`)
      break
    case 'author':
      await c.reply({ embeds: [authorEmbed], ephemeral: true })
      break
    case 'help':
      await c.reply({ embeds: [commandsHelpEmbed] })
      break
    default:
      break
  }
})

// Log in to Discord with your client's token
client.login(process.env.DC_TOKEN!)
