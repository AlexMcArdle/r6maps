const express = require('express')
const app = express()
const port = 3000

app.use(express.static('site'))

app.listen(port, () => console.log(`Dev server listening on port ${port}!`))