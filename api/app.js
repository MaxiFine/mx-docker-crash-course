const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book Review: The Name of the Wind"
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
      "title":"Dump Container Testing Review tESTING MIKE TWO..."
    },
    {
      "id":"5",
      "title":"Dump Container Testing Review tESTING MIKE TWO..."
    },
    {
      "id":"6",
      "title":"Dump Container Testing Review tESTING MIKE TWO..."
    },
    {
      "id":"7",
      "title":"Dump Container Testing Review tESTING MIKE TWO..."
    },
    {
      "id":"8",
      "title":"Dump Container Testing Review tESTING MIKE TWO..."
    },
    {
      "id":"9",
      "title":"Dump Container Testing Review tESTING MIKE TWO..."
    },
    {
      "id":"10",
      "title":"Dump Container Testing Review tESTING MIKE TWO..."
    },
    {
      "id":"11",
      "title":"Dump Container Testing Review tESTING MIKE TWO..."
    },
    {
      "id":"12",
      "title":"Dump Container Testing Review tESTING MIKE TWO..."
    },
    {
      "id":"13",
      "title":"Dump Container Testing Review tESTING MIKE TWO..."
    },
    {
      "id":"14",
      "title":"Dump Container Testing Review tESTING MIKE TWO..."
    },
    {
      "id":"15",
      "title":"Dump Container Testing Review tESTING MIKE TWO..."
    },
    {
      "id":"16",
      "title":"VOLUMES MAPPING AND CREATING TEST MIKE TWO..."
    }
    
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000... test')
})