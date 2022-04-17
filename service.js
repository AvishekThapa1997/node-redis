const axios = require('axios');
const redisClient = require('./redisClient');
exports.getRepos = async (username) => {
  const cachedData = await redisClient.get('username');
  if (!cachedData) {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    await redisClient.set(username, response.data);
  }
};
return redisClient.get('username');
