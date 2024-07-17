const express = require('express')
const app = express()

app.use(express.json())
app.use(require('cors')())

app.get('/api', (req, res) => {
  res.json({ "message": "Api connected."})
})

app.listen(5000, () => console.log("Listening on port 5000."))