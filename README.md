# Aggregations

* seed data
  * create tweets
    * seed with index number
    * seed with chance
  * create comments
  * use in tests
    * beforeEach seed database
    * make data helpers file
* aggregations
  * tweets on handle `/api/v1/tweets/handle/:handle`
  * get handle with most tweets `/api/v1/tweets/top`
  * get tweets with most comments `/api/v1/tweets/most-comments`
