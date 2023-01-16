const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())

const client = path.join(__dirname, '../client/build')
console.log('client: ', client)
app.use(express.static(client))

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


