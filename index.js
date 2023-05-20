require('dotenv').config();

const { Client, GatewayIntentBits, } = require('discord.js');
const client = new Client({

    //discord intents

	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

//ready logging

client.on('ready', (c) => {
    console.log(`${c.user.tag} Is ready.`);
    });
    
    //message reply ignore bots

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
if (message.content === 'lucky'){
    message.reply('lucky');
}
});

//bot token

client.login(process.env.TOKEN);
