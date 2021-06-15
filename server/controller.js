const houses = require('./db.json')

let id = 4

module.exports = {
  getAllHouses: function(req, res) {
    res.status(200).send(houses)
  },

  deleteHouse: function(req, res) {
    let index = houses.findIndex(element => element.id === +req.params.id)
    houses.splice(index, 1)
    res.status(200).send(houses)
  },

  createHouse: function(req, res) {
    let { address, price, imageURL } = req.body
    let newHouse = {
      id: id,
      address,
      price,
      imageURL
    }

    houses.push(newHouse)
    res.status(200).send(houses)
    id++
  },

  updateHouse: function(req, res) {
    let { id } = req.params
    let { type } = req.body
    let index = houses.findIndex(element => +element.id === +id)

  if (type === 'plus') {
      houses[index].price+=10000
      res.status(200).send(houses)
    } else if (type === 'minus') {
    houses[index].price-=10000
      res.status(200).send(houses)
    } else{
      res.sendStatus(400)
    }
  }
}