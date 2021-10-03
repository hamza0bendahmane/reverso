const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(
    express.urlencoded({
    extended: true,
  })
)
const { Router} =  require('express');
const router = Router();



router.get('/api', (request, response) => {
    response.status(200).json({ info: 'Congrats.... for Success Connexion , This is Karini API' })
  })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
