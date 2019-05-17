const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', _ => {
    console.log('Hello world')
})

client.on('message', message => {
    if(message.content.toLowerCase() == "oof") {
        message.channel.send('"Out of Facility, sometimes interchanged with the term Out of Office, indicating that a person is on vacation or away from the workplace. OOF is commonly used within Microsoft company culture, originating from a command in its Xenix mail system."')
    }
})

client.login(require('./config.json').token)
