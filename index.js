require('dotenv').config()
const Discord = require('discord.js')
const bot = new Discord.Client()
bot.commands = new Discord.Collection()
const botCommands = require('./commands')

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key])
})

const PREFIX = '!dams '
const TOKEN = process.env.TOKEN

bot.login(TOKEN)

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', msg => {
  if (msg.author.bot) return
  if (!msg.content.startsWith(PREFIX)) return

  const commandBody = msg.content.slice(PREFIX.length)
  const args = commandBody.split(' ')
  const command = args.shift().toLowerCase()

  console.info(`Called command: ${command}`)

  if (command === 'help') {
    let msgValue = ''
    bot.commands.forEach(command => {
      msgValue += `\n**${command.name}** : ${command.description},`
    })
    msg.reply(msgValue)
  } 
  else {
    if (!bot.commands.has(command)) return
    try {
      bot.commands.get(command).execute(msg, args)
    } catch (error) {
      console.error(error)
      msg.reply("Petite erreur pendant l'execution de la commande...")
    }
  }
})
