const express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const translateFrAr = async (req, response) => {
  var query =  request.params.query ;

  reverso.getTranslation(query, 'Arabic', 'French', (res) => {
      console.log(res);
      response.status(200).json(res);
  }).catch(err => {
      console.error(err);
  });
};
const translateArFr = async (req, response) => {
  var query =  request.params.query ;

    reverso.getTranslation(query, 'French', 'Arabic', (res) => {
        console.log(res);
        response.status(200).json(res);
    }).catch(err => {
        console.error(err);
    });
};


module.exports = {
  translateFrAr,
  translateArFr
}
