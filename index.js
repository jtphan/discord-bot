const Discord = require('discord.js');

const token = process.env.DISCORD_TOKEN

const client = new Discord.Client();

client.on('message', (msg) => {
	console.log(msg);
	if (msg.content === '!test') {
		//note: use back quote ` for literal string interpretation 
		msg.channel.send(`Hello ${msg.author}!`);
	}

	if (msg.content === '!yeah') {
		msg.channel.send('What is life and how can I be happy for myself');
	}
});

client.on('ready', () => {
	console.log('Bot is now connected');

	//client.channels.find(x => x.name === 'test').send('Hello, please end my life!');
});

client.login(token);
