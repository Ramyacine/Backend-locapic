var express = require('express');
var router = express.Router();

require('../models/connection');
const Place = require('../models/places');

// const { checkBody } = require('../modules/checkBody');
// const uid2 = require('uid2');
// const bcrypt = require('bcrypt');


router.post('/', (req, res) => {
    const { nickname, name, latitude, longitude } = req.body;
    const newplace = new Place({ nickname, name, latitude, longitude });

    newplace.save().then(() => {
      res.json({ result: true });
    });
   });

router.get('/:nickname', (req, res) => {
    Place.find({ nickname: req.params.nickname })
    .then(data => {
      res.json({ result: true, places: data });
    });
   });

  router.delete('/', (req, res) => {
   Place.deleteOne({ nickname: req.body.nickname , name:req.body.name })
   .then(() => {
   // Place.find()
    //.then(data =>{
    res.json({result: true});
   //})
    })
    });


module.exports = router;


// Place.findOne({ nickname: req.body.username,name: req.body.name, latitude : req.body.latitude, longitude : req.body.longitude})
// .then(data => {
//   if (data === null) {
//     const newPlace = new Place({
//       nickname: req.body.nickname,
//       name: req.body.name,
//       latitude : req.body.latitude,
//       longitude : req.body.longitude,
//     });

//     newPlace.save().then(newDoc => {
//       res.json({ result: true,});
//     });
//   } else {
//     // User already exists in database
//     res.json({ result: false, error: 'User already exists' });
//   }
// });
// });