require('dotenv').config();
require('./demo/lib/utils/connect')();
const Tweet = require('./lib/models/Tweet');
const Comment = require('./lib/models/Comment');

Tweet
  .topHandles()
  .then(topHandles => console.log(topHandles));

Comment
  .topHandles()
  .then(topCommentHandles => console.log(topCommentHandles));

Tweet
  .mostCommented()
  .then(mostCommentedTweets => console.log(mostCommentedTweets));
