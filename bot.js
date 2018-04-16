const discord = require('discord.js');
const logger = require('winston');
const config = require("./config.json");

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
level = 'debug';

const client = new discord.Client();

client.on('ready', () => {
    logger.info(`Connected!`);
});

client.on('message', (message) => {
    logger.info(`${message}`);
    if (message == 'Hello Sipho') {
        message.channel.send('Molo Boetie!');
    }
});

client.login(config.token);