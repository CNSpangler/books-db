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

  it('gets a book by id', async() => {
    const author = await getAuthor();
    const book = await getBook({ authorId: author._id });

    return request(app)
      .get(`/api/v1/books/${book._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...book,
          authorId: author
        });
      });
  });

  // it('updates a comment by id', async() => {
  //   const comment = await getComment();

  //   return request(app)
  //     .patch(`/api/v1/comments/${comment._id}`)
  //     .send({ text: 'bad!' })
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         ...comment,
  //         text: 'bad!'
  //       });
  //     });
  // });

  // it('deletes a comment by id', async() => {
  //   const comment = await getComment();

  //   return request(app)
  //     .delete(`/api/v1/comments/${comment._id}`)
  //     .then(res => {
  //       expect(res.body).toEqual(comment);
  //     });
  // });

});
