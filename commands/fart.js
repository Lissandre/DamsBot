module.exports = {
  name: 'fart',
  description: 'Dams prout',
  async execute(msg, args) {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join()
      const dispatcher = connection.play('./sounds/fart.mp3', { volume: typeof args[0] === 'number' ? args[0] : 1 })
    }
    else {
      msg.reply('Tu dois être dans un channel audio bébou...')
    }
  },
}
