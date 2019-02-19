const Player = require('../models/Player')

module.exports = {
   get: (params) => {
      return new Promise( (resolve, reject) => {
         Player.find(params)
            .then(data => {
               resolve(data)
            })
            .catch(err => {
               reject(err)
            })
      })
   },

   getById: id => {
      return new Promise( (resolve, reject) => {
         Player.findById(id)
            .then(data => {
               resolve(data)
            })
            .catch(err => {
               reject(new Error(`The team: ${id}, was not found`))
            })
      })
   },

   post: params => {
      return new Promise( (resolve, reject) => {
         Player.create(params)
            .then(data => {
               resolve(data)
            })
            .catch(err => {
               reject(err)
            })
      })
   }

   
}
