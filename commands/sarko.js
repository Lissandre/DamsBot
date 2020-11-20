module.exports = {
  name: 'sarko',
  description: 'Quelle indignité',
  async execute(msg, args) {
    if (msg.member.voice.channel) {
      msg.delete()
      const connection = await msg.member.voice.channel.join()
      const dispatcher = connection.play('./sounds/sarko.mp3', { volume: 6 })
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