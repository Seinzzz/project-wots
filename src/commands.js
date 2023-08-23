//File ini berisi seluruh perintah untuk bot dan keterangan pada setiap perintah

import { ApplicationCommandOptionType } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!'
  },
  {
    name: 'hello',
    description: 'Get a warm greeting!'
  },
  {
    name: 'info',
    description: 'About a bot'
  },
  {
    name: 'author',
    description: `Who's the ceator?`
  },
  {
    name: 'help',
    description: `Commands you can do with this BOT`
  },
  {
    name: 'quotes',
    description: 'Generate Random Quotes.',
    options: [
      {
        name: 'language',
        description: 'Choose between id/en',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
          {
            name: 'id',
            value: 'id'
          },
          {
            name: 'en',
            value: 'en'
          }
        ]
      }
    ]
  }
];

export default commands;
