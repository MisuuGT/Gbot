const Discord = require('discord.js12')
const { token } = require("./botconfig.json");
const {
       Client,
         Intents
} = require('discord.js12');
const client = new Client({
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
        }); 

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.cooldown = new Discord.Collection();

require("./Handlers/Commands.js")(client);
require("./Handlers/Events.js")(client);

client.login(token);

