const express = require('express')
const cors = require('cors')
const app = express()
const ctrl = require('./controller.js')

const { getAllHouses, deleteHouse, createHouse, updateHouse } = require('./controller.js')

app.use(express.json())
app.use(cors())

app.get(`/api/houses`, getAllHouses)

app.delete(`/api/houses/:id`, deleteHouse)

app.post(`/api/houses`, createHouse)

app.put(`/api/houses/:id`, updateHouse)






const SERVER_PORT = 4004
app.listen(SERVER_PORT, function() {
  console.log(`Server is running on ${SERVER_PORT}`)
})