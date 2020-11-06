const axios = require('axios')

module.exports = {
  name: 'stream',
  description: 'Dams stream',
  async execute(msg, args) {
    const data = JSON.stringify({ 
      "w2g_api_key" : process.env.WATCH_API,
      "share" : args,
      "bg_color" : "#545454",
      "bg_opacity" : "50"
    })
    axios
      .post('https://w2g.tv/rooms/create.json', data)
      .then(res => {
        msg.reply(`Let's go: https://w2g.tv/rooms/${res.streamkey}`)
      })
      .catch(error => {
        msg.channel.send("J'ai pas réussi à créer la room :(")
        console.error(error)
      })
  },
}
