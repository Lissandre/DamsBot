module.exports = {
  name: 'vent',
  description: 'Among us vent',
  async execute(msg, args) {
    if (msg.member.voice.channel) {
      msg.delete()
      const connection = await msg.member.voice.channel.join()
      const dispatcher = connection.play('./sounds/vent-out.mp3', { volume: 1 })
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
