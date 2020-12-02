module.exports = {
  name: 'unsnap',
  description: 'Recover your voices after a snap',
  async execute(msg, args) {
    if (msg.member.voice.channel) {
      msg.guild.channels.cache.get(msg.member.voice.channel.id).members.forEach(member => {
        msg.guild.member(member.user.id).voice.setMute(false)
      })
      msg.reply('Vous venez de retrouver vos voix')
    }
    else {
      msg.reply('Tu dois être dans un channel audio bébou...')
    }
  },
}