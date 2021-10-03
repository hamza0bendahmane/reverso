const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(
    express.urlencoded({
    extended: true,
  })
)
app.use(require('./routes/route'));


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})



