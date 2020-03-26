const { getBook, getBooks, getAuthor } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('book routes', () => {
  it('creates a book', async() => {
    const author = await getAuthor();
    return request(app)
      .post('/api/v1/books')
      .send({
        authorId: author._id,
        title: 'Best Book Ever',
        genre: 'Non-Fiction'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          authorId: author._id,
          title: 'Best Book Ever',
          genre: 'Non-Fiction',
          __v: 0
        });
      });
  });

  // it('gets all books', async() => {
  //   const books = await getBooks();

  //   return request(app)
  //     .get('/api/v1/books')
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         ...books
  //       });
  //     });
  // });

  it('gets a book by id', async() => {
    const author = await getAuthor();
    const book = await getBook({ authorId: author._id });

    return request(app)
      .get(`/api/v1/books/${book._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...book
        });
      });
  });

  it('updates a book by id', async() => {
    const book = await getBook();

    return request(app)
      .patch(`/api/v1/books/${book._id}`)
      .send({ title: 'Worst Book Ever!' })
      .then(res => {
        expect(res.body).toEqual({
          ...book,
          title: 'Worst Book Ever!'
        });
      });
  });

  it('deletes a book by id', async() => {
    const book = await getBook();

    return request(app)
      .delete(`/api/v1/books/${book._id}`)
      .then(res => {
        expect(res.body).toEqual(book);
      });
  });
});
