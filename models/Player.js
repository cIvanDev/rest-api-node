const mongoose = require('mongoose')

const Player = new mongoose.Schema({
   firstName: { type:String, default:'' },
   lastNmae: { type:String, default:'' },
   position: { type:String, default:'' },
   age: { type:Number, default:0 },
   team: { type:String, default:'' },
})

module.exports = mongoose.model('Player', Player)
