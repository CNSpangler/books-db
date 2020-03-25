const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  title: {
    type: String,
    required:true
  },
  genre: {
    type: String,
    required: true
  }
});

schema.statics.topHandles = function() {
  return this
    .aggregate([
      {
        '$group': {
          '_id': '$handle', 
          'count': {
            '$sum': 1
          }
        }
      }, {
        '$sort': {
          'count': -1
        }
      }
    ]);
};

module.exports = mongoose.model('Comment', schema);
