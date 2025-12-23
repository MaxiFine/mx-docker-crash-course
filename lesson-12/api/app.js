const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book Review: The Name of the Rain"
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamond"
    },
    {
      "id":"3",
      "title":"Show Review: Alice in Borderland"
    },
    {
      "id":"4",
      "title":"Movie Review: The Batman"
    },
    {
      "id":"5",
      "title":"Book Review: The Hobbit"
    },
    {
      "id":"6",
      "title":"Game Review: God of War"
    },
    {
      "id":"7",
      "title":"Show Review: Stranger Things"
    },
    {
      "id":"8",
      "title":"Movie Review: Inception"
    }
  ])
})

app.listen(4500, () => {
  console.log('listening to port 4500..........')
})

