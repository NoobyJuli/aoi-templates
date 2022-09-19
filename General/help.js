module.exports = [{
name:"help", 
type: "interaction",
prototype: "slash",
$if:"v4", 
code:`$interactionReply[;{newEmbed:{title:Help Menu}{color:RANDOM}{description:
PUT SOME RANDOM TEXT HERE
Example: \`\`\`$getServerVar[prefix]\`\`\`
[Support / Report / Bugs / Errors](https://google.com)}{footer:Made with <3 by $username[$botOwnerID]:$userAvatar[$botOwnerID]}};{actionRow:{button:Moderation:primary:mod}};;;no]
$setUserVar[155;$authorID;$authorID;$guildID]
`
},{
type:"interaction",
prototype:"button",
name:"mod",
code:`
$interactionUpdate[;{newEmbed:{title:RANDOM TEXT HERE}{description:
PUT SOME RANDOM TEXT HERE
}{fields:Ban,ban <@Mention/ID> <Reason>,yes:Kick,kick <@Mention/ID> <Reason>,yes:RANDOM TEXT,RANDOM TEXT,yes}{ephemeral:no}{color:ECD53D}{footer:Made with <3 by $username[$botOwnerID]:$userAvatar[$botOwnerID]}}]
$setUserVar[database;1]
`
}]

/// NEEDED VARIABLES --> go to Setup if you don't know how to create variables
prefix: "random prefix here",
155: "",
database: "" ///

/// THIS IS A SLASH-COMMAND, YOU HAVE TO CREATE IT FIRST, OTHERWISE IT WONT WORK
    if you need help with slash commands, look up in the folder called Slash Commands ///
