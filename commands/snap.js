module.exports = {
  name: 'snap',
  description: 'Thanosify your voice channel',
  async execute(msg, args, bot) {
    if (!msg.guild.me.hasPermission('MOVE_MEMBERS')) return msg.reply('Missing the required `Move Members` permission.')
    if (msg.member.voice.channel) {
      msg.delete()
      let users = []
      let killUsers = []
      const connection = await msg.member.voice.channel.join()

      msg.guild.channels.cache.get(msg.member.voice.channel.id).members.forEach(member => {
        users.push(member.user)
      })

      for (let i = 0; i < Math.ceil(users.length/2)+1; i++) {
        const random = Math.floor(Math.random()*users.length)
        killUsers.push(users[random])
        users.splice(random, 1)
      }

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