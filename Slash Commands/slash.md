# Slash Commands
## What are slash commands?
Look up [here](https://discord.com/blog/slash-commands-are-here) for help.
## Which commands in this repo do use slash commands?
- help.js
## How to create a slash command
**1.** __First of all you have to add this to your index.js__
```
module.exports = {
name: "eval",
code: `$eval[$message;no] 
✅ Code executed!
$onlyForIDs[PUT YOUR ID HERE;You don't have the permission to execute this command!]
$suppressErrors[You forgot to replace PUT YOUR ID HERE with your ID!]`
```
⚠️ Please only use YOUR userID! The person whose ID you provide has the same permissions as the bot. If you give the bot admin permissions on your server and don't provide your UserID, anyone else can destroy the server.

**2.** __Now restart the bot in your panel and execute the following command on a discord server, your bot is in!__
```
$createApplicationCommand[Enter global or $guildID here! I you want the slash command to get added on every server, the bot is on, select global.;name of the interaction;some random description text;true;slash;]
```
