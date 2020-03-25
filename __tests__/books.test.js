const { getBook, getBooks, getAuthor } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('book routes', () => {
  it('creates a book', async() => {
    const book = await getBook();

    return request(app)
      .post('/api/v1/books')
      .send({
        authorId: 1234,
        title: 'Best Book Ever',
        genre: 'Non-Fiction'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          authorId: 1234,
          title: 'Best Book Ever',
          genre: 'Non-Fiction',
          __v: 0
        });
      });
  });

  // it('gets a comment by id', async() => {
  //   const tweet = await getTweet();
  //   const comment = await getComment({ tweetId: tweet._id });

  //   return request(app)
  //     .get(`/api/v1/comments/${comment._id}`)
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         ...comment,
  //         tweetId: tweet
  //       });
  //     });
  // });

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
