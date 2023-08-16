import { EmbedBuilder } from 'discord.js';

// inside a command, event listener, etc.
//author embed
const authorEmbed = {
  Color: 0x0099ff,
  Title: 'About The Author',
  URL: 'https://example.com/',
  Author: {
    name: 'Wolf Killer',
    iconURL:
      'https://i.pinimg.com/564x/b2/51/56/b25156a0cae701f718dbb734f93ffbe9.jpg',
    url: 'https://example.com',
  },
  Description:
    'A group of people who have big dreams but have a hobby of lying down and being lazy',
  Thumbnail: {
    url:
      'https://i.pinimg.com/564x/b2/51/56/b25156a0cae701f718dbb734f93ffbe9.jpg',
  },
  Fields: [
    {
      name: 'Why this bot created?',
      value: `A bot made out of curiosity and obsession with an idol group from the capital`,
    },
    {
      name: 'About The BOT',
      value: `This bot is planned to have functions such as:
    - Broadcasts live\n- View the list of members\n- View details of each member`,
    },
    {
      name: '\u200B',
      value: '\u200B',
    },
    {
      name: 'Inline field title',
      value: 'Some value here',
      inline: true,
    },
    {
      name: 'Inline field title',
      value: 'Some value here',
      inline: true,
    },
  ],
  Image: { url: 'https://i.imgur.com/oam2On8.jpeg?2' },
  Timestamp: {},
  Footer: {
    text: 'Wolf Killer',
    iconURL:
      'https://i.pinimg.com/564x/b2/51/56/b25156a0cae701f718dbb734f93ffbe9.jpg',
  },
};

const commandsHelpEmbed = {
  Color: 0x62bb68,
  Title: 'Commands',
  Author: {
    name: 'Wots',
    iconURL:
      'https://i.pinimg.com/564x/b2/51/56/b25156a0cae701f718dbb734f93ffbe9.jpg',
    url: 'https://example.com',
  },
  //   Thumbnail: {
  //     url:
  //       'https://i.pinimg.com/564x/b2/51/56/b25156a0cae701f718dbb734f93ffbe9.jpg',
  //   },
  Fields: [
    {
      name: '',
      value: `/ping\n/hello\n/info\n/author`,
    },
    {
      name: '\u200B',
      value: '\u200B',
    },
  ],
};

export { authorEmbed, commandsHelpEmbed };
