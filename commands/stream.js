const axios = require('axios')

module.exports = {
  name: 'stream',
  description: 'Dams stream (require argument)',
  async execute(msg, args) {
    if (args === '') {
      msg.reply('Tu dois aussi me donner un lien bébou...')
    }
    else {
      const data = { 
        "w2g_api_key" : process.env.WATCH_API,
        "share" : args[0],
        "bg_color" : "#545454",
        "bg_opacity" : "100"
      }
      axios
        .post('https://w2g.tv/rooms/create.json', data)
        .then(res => {
          msg.delete()
          msg.channel.send(`Let's go: https://w2g.tv/rooms/${res.data.streamkey}`)
        })
        .catch(error => {
          msg.channel.send("J'ai pas réussi à créer la room :(")
          console.error(error)
        })
    }
  },
}
