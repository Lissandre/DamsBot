module.exports = {
  name: 'vent',
  description: 'Among us vent',
  async execute(msg, args) {
    if (msg.member.voice.channel) {
      const channel = msg.member.voice.channel
      const connection = await channel.join()
      const dispatcher = connection.play('./sounds/vent-out.mp3', { volume: !isNaN(parseInt(args[0],10)) ? parseInt(args[0],10) : 1 })
    }
    else if (msg.mentions.members.first().voice.channel) {
      const channel = msg.mentions.members.first().voice.channel
      const connection = await channel.join()
      const dispatcher = connection.play('./sounds/fart.mp3', { volume: !isNaN(parseInt(args[0],10)) ? parseInt(args[0],10) : 1 })
    }
    else {
      msg.reply('Tu dois être dans un channel audio bébou...')
    }
  },
}
