const Book = require('../lib/models/Book');
const Author = require('../lib/models/Author');
const chance = require('chance').Chance();

// specifying the number of tweets to create with our seed function
module.exports = async({ authorsToCreate = 10, booksToCreate = 100 } = {}) => {
  // creating tweets
  // creating an array of tweetsToCreate length
  // map through the array
  // -> for each item in the array we create an object with { handle, text }
  // for each tweet in the mapped array we create a tweet in our mongodb
  const genres = ['Science Fiction', 'Fantasy', 'Non-Fiction', 'YA', 'Horror', 'Romance'];
  await Book.create([...Array(booksToCreate)].map(() => ({
    title: chance.sentence(),
    author: chance.pickone(authors),
    genre: chance.pickone(genres),
  })));

  const authors = await Author.create([...Array(authorsToCreate)].map(() => ({
    name: chance.name()
  })));
};
