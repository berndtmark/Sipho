const discord = require('discord.js');
const logger = require('winston');
const config = require("./config.json");
const messageReplies = require("./messages.js")

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true,
    level: 'debug'
});

const client = new discord.Client();

client.on('ready', () => {
    logger.info(`Connected!`);
});

client.on('message', (message) => {
    logger.debug(`${message}`);

    if(messageReplies.messages[message.content]) {
        message.channel.send(messageReplies.messages[message.content]);
    }
});

client.login(config.token);