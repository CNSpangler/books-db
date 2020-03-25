const { getAuthor, getAuthors, getBook, getBooks } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../demo/lib/app');
const Author = require('../demo/lib/models/Author');
const Book = require('../demo/lib/models/Book');

describe('author routes', () => {
  it('creates a author', () => {
    return request(app)
      .post('/api/v1/authors')
      .send(getAuthor())
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: expect.any(String),
          __v: 0
        });
      });
  });

  //   it('creates a tweet with random text', () => {
  //     return request(app)
  //       .post('/api/v1/tweets')
  //       .send({
  //         handle: 'test',
  //       })
  //       .then(res => {
  //         expect(res.body).toEqual({
  //           _id: expect.any(String),
  //           handle: 'test',
  //           text: expect.any(String),
  //           __v: 0
  //         });
  //       });
  //   });

  //   it('gets a tweet by id', async() => {
  //     const tweet = await getTweet();
  //     // need comments as well since we are populating in route
  //     const comments = await getComments({ tweetId: tweet._id });

  //     return request(app)
  //       .get(`/api/v1/tweets/${tweet._id}`)
  //       .then(res => {
  //         // {
  //         //   _id: '1111',
  //         //   handle: 'spot',
  //         //   text: 'my tweet',
  //         //   comments: [
  //         //     { },
  //         //     { },
  //         //     {}
  //         //   ]
  //         //   __v: 0
  //         // }
  //         expect(res.body).toEqual({
  //           ...tweet,
  //           comments // because we populate in route
  //         });
  //         // expect(res.body).toEqual({
  //         //   _id: expect.any(String),
  //         //   handle: 'test',
  //         //   text: 'test 1234',
  //         //   comments: expect.any(Array),
  //         //   __v: 0
  //         // });
  //         // expect(res.body.comments).toEqual(JSON.parse(JSON.stringify(comments)));
  //       });
  //   });

  //   it('gets all tweets', async() => {
  //     const tweets = await getTweets();

  //     return request(app)
  //       .get('/api/v1/tweets')
  //       .then(res => {
  //         expect(res.body).toEqual(tweets);
  //         // expect(res.body).toHaveLength(3);
  //         // tweets.forEach(tweet => {
  //         //   expect(res.body).toContainEqual({
  //         //     ...tweet.toJSON(),
  //         //     _id: tweet.id
  //         //   });
  //         // });
  //       });
  //   });

  //   it('updates a tweet by id', async() => {
  //     const tweet = await getTweet();

  //     return request(app)
  //       .patch(`/api/v1/tweets/${tweet._id}`)
  //       .send({ text: '1234 test' })
  //       .then(res => {
  //         expect(res.body).toEqual({
  //           ...tweet,
  //           text: '1234 test'
  //         });
  //         // expect(res.body).toEqual({
  //         //   _id: expect.any(String),
  //         //   handle: 'test',
  //         //   text: '1234 test',
  //         //   __v: 0
  //         // });
  //       });
  //   });

  //   it('deletes a tweet by id', async() => {
  //     const tweet = await getTweet();
    
//     return request(app)
//       .delete(`/api/v1/tweets/${tweet._id}`)
//       .then(res => {
//         expect(res.body).toEqual(tweet);
//         // expect(res.body).toEqual({
//         //   _id: expect.any(String),
//         //   handle: 'test',
//         //   text: 'test 1234',
//         //   __v: 0
//         // });
//       });
//   });
});
