const aoijs = require("aoi.js")
 
const bot = new aoijs.AoiClient({
  token: "DISCORD BOT TOKEN",          
  prefix: "DISCORD BOT PREFIX",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})
 
bot.onMessage()
 
bot.command({
name: "ping",
code: `Pong! $pingms`
})
 
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
 
