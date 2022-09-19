# How to use Command Handler
You just have to add
```
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")
```
to your index.js! 
You are done now. You can now create a folder called "Commands" and put your commands there.

Your code is build like ``module.exports = {[ ]}``.
