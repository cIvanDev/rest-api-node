// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const players = [
   { firstName: 'eli', lastNmae: "manning", position: "qb", age:23, team:"nyg" },
   { firstName: 'tom', lastNmae: "brady", position: "qb", age:32, team:"ny" },
   { firstName: 'dido', lastNmae: "watt", position: "bc", age:23, team:"ny" },
]

const teams = [
   { name:"giants", city:"new york", conference:"nfc" },
   { name:"patriots", city:"new england", conference:"afc" },
   { name:"texans", city:"houston", conference:"nfc" },
]

const db = {
   players,
   teams
}

router.get("/:resource", (req, res) => {
   const resource = req.params.resource
   let data = db[resource]
   let confirmation = "success"


   if(data == null){
      confirmation = "failed"
      data = "No avaliable data for this resource"
   }

   res.json({
      confirmation,
      data
   })
})

//router.get( '/players', (req, res) =>{
   //res.json({
      //confirmation: 'success',
      //data: players
   //})
//})

//router.get( '/teams', (req, res) =>{
   //res.json({
      //confirmation: 'success',
      //data: teams
   //})
//})

module.exports = router
