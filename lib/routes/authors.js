const { Router } = require('express');
const Author = require('../models/Author');

module.exports = Router()
  .post('/', (req, res, next) => {
    Author
      .create(req.body)
      .then(author => res.send(author))
      .catch(next);
  });

// .get('/most-commented', (req, res, next) => {
//   Tweet
//     .mostCommented()
//     .then(mostCommented => res.send(mostCommented))
//     .catch(next);
// })

// .get('/:id', (req, res, next) => {
//   Tweet
//     .findById(req.params.id)
//     .populate('comments')
//     .then(tweet => res.send(tweet))
//     .catch(next);
// })

// .get('/', (req, res, next) => {
//   Tweet
//     .find()
//     .then(tweets => res.send(tweets))
//     .catch(next);
// })

// .patch('/:id', (req, res, next) => {
//   Tweet
//     .findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true })
//     .then(tweet => res.send(tweet))
//     .catch(next);
// })

// .delete('/:id', (req, res, next) => {
//   Tweet
//     .findByIdAndDelete(req.params.id)
//     .then(tweet => res.send(tweet))
//     .catch(next);
// });