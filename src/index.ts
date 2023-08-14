import 'dotenv/config'
import { Events } from 'discord.js'
import client from './discord'

// Login to Discord with your client's token
client
  .login(process.env.DC_TOKEN)
  .then(() => {
    console.log('Logged in!')
  })
  .catch(err => {
    console.error(err)
  })

// Listen for the ready event
client.on(Events.ClientReady, () => {
  console.log('Bot online!')
})
