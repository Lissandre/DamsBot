module.exports = {
  name: 'speak',
  description: 'Dams punchline',
  async execute(msg, args) {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join()
      const dispatcher = connection.play('./sounds/death.mp3', { volume: !isNaN(parseInt(args[0],10)) ? parseInt(args[0],10) : 1 })
    }
    else {
      msg.reply('Tu dois être dans un channel audio bébou...')
    }
  },
}
