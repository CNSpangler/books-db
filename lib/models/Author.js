const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
      // delete ret.__v;
    }
  }
});

schema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'authorId'
});

schema.statics.mostBooks = function(count = 3) {
  return this
    .aggregate([
      {
        '$lookup': {
          'from': 'books', 
          'localField': '_id', 
          'foreignField': 'authorId', 
          'as': 'books'
        }
      }, {
        '$project': {
          '_id': true, 
          'name': true, 
          'totalBooks': {
            '$size': '$books'
          }
        }
      }, {
        '$sort': {
          'books': -1
        }
      }, {
        '$limit': count
      }, 
    ]);
};

module.exports = mongoose.model('Author', schema);
