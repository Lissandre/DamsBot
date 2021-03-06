module.exports = {
  name: 'snap',
  description: 'Thanosify your voice channel (or --force it)',
  async execute(msg, args) {
    if (!msg.guild.me.hasPermission('MOVE_MEMBERS')) return msg.reply('Missing the required `Move Members` permission.')
    if (msg.member.voice.channel) {
      let users = []
      let killUsers = []

      msg.guild.channels.cache.get(msg.member.voice.channel.id).members.forEach(member => {
        users.push(member.user)
      })

      for (let i = 0; i < Math.ceil(users.length/2); i++) {
        const random = Math.floor(Math.random()*users.length)
        killUsers.push(users[random])
        users.splice(random, 1)
      }

      msg.reply(`Tu es inéluctable.`)

      killUsers.forEach(user => {
        if (args[0] === '--force') {
          msg.guild.member(user.id).voice.setChannel(null)
        }
        else {
          msg.guild.member(user.id).voice.setMute(true)
        }
      })
    }
    else {
      msg.reply('Tu dois être dans un channel audio bébou...')
    }
  },
}