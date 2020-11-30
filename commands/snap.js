module.exports = {
  name: 'snap',
  description: 'Thanosify your voice channel',
  async execute(msg, args, bot) {
    if (!msg.guild.me.hasPermission('MOVE_MEMBERS')) return msg.reply('Missing the required `Move Members` permission.')
    if (msg.member.voice.channel) {
      let users = []
      let killUsers = []
      const connection = await msg.member.voice.channel.join()

      connection.channel.guild.members.cache.forEach(member => {
        users.push(member.user)
      })

      for (let i = 0; i < Math.floor(users.length/2); i++) {
        const random = Math.floor(Math.random()*users.length)
        killUsers.push(users[random])
        users.splice(random, 1)
        console.log(users, killUsers);
      }

      killUsers.forEach(user => {
        msg.guild.member(user.id).voice.setChannel(null)
      })
    }
    else {
      msg.reply('Tu dois être dans un channel audio bébou...')
    }
  },
}