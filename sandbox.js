require('dotenv').config();
require('./demo/lib/utils/connect')();
const Author = require('./lib/models/Author');
const Book = require('./lib/models/Book');
const getters = require('./db/data-helpers');

getters();

// Author
//   .topHandles()
//   .then(topHandles => console.log(topHandles));

// Book
//   .topHandles()
//   .then(topBookHandles => console.log(topBookHandles));

// Author
//   .mostBooked()
//   .then(mostBookedAuthors => console.log(mostBookedAuthors));
