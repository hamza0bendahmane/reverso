const { Router} =  require('express');
const router = Router();
const express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const {    
  translateFrAr,
  translateArFr
} = require('../controllers/controller');

router.get('/api', (request, response) => {
  response.status(200).json({ info: 'Congrats.... for Success Connexion , This is reverso API' })
})

  router.get('/api/french/arabic', translateFrAr)

  router.get('/api/arabic/french', translateArFr)



module.exports = router