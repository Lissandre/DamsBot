module.exports = {
  name: 'fart',
  description: 'Dams prout',
  async execute(msg, args) {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join()
      const dispatcher = connection.play('./sounds/fart.mp3', { volume: 6 })
      dispatcher.on('finish', () => {
        setTimeout(()=>{
          connection.disconnect()
        }, 500)
      })
    }
    else {
      msg.reply('Tu dois être dans un channel audio bébou...')
    }
  },
}