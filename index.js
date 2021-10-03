const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const Reverso = require('reverso-api');
const reverso = new Reverso();
app.use(express.json())
app.use(
    express.urlencoded({
    extended: true,
  })
)
const { Router} =  require('express');
const router = Router();



router.get('/api', (request, response) => {
    response.status(200).json({ info: 'Congrats.... for Success Connexion , This is reverso API' })
  })

  router.get('/api/french/arabic', (request, response) => {
    var query =  request.params.query ;

    reverso.getTranslation(query, 'French', 'Arabic', (res) => {
        console.log(response);
        response.status(200).json(res);
    }).catch(err => {
        console.error(err);
    });  })

  router.get('/api/arabic/french', (request, response) => {
      var query =  request.params.query ;

    reverso.getTranslation(query, 'Arabic', 'French', (res) => {
        console.log(response);
        response.status(200).json(res);
    }).catch(err => {
        console.error(err);
    });

  })





app.listen(port, () => {
  console.log(`App is running on port ${port}.`)
})
