const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .post('/', (req, res, next) => {
    Book
      .create(req.body)
      .then(book => res.send(book))
      .catch(next);
  });

// .get('/:id', (req, res, next) => {
//   Comment
//     .findById(req.params.id)
//     .populate('tweetId')
//     .then(comment => res.send(comment))
//     .catch(next);
// })

// .patch('/:id', (req, res, next) => {
//   Comment
//     .findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true })
//     .then(comment => res.send(comment))
//     .catch(next);
// })

// .delete('/:id', (req, res, next) => {
//   Comment
//     .findByIdAndDelete(req.params.id)
//     .then(comment => res.send(comment))
//     .catch(next);
// });
