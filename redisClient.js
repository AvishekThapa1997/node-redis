const redis = require('redis');
const redisClient = redis.createClient(6379);
(async () => {
  await redisClient.connect();
})();
module.exports = redisClient;
