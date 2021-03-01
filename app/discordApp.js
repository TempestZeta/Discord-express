const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./discordConfig.json');
const discordApp = {

    login () {
        bot.login(config.token);
    },
    sendMessage ( content ) {        
        bot.emit('send', content);
    }
}

bot.once('ready', () => {
  console.log("Discord Bot Ready");
});

bot.on('send', message => {{
    const channel = bot.channels.cache.get('');
    channel.send(message);    
}});

module.exports = discordApp;