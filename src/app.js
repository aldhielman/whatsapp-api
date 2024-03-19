const client = require("./client")

const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/message', (req, res) => {
  console.log(req.body)
  client.sendMessage("120363040669549175@g.us",req.body.message)
  res.send("OK")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})