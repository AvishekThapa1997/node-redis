const service = require('./service');
exports.getRepos = async (req, res, next) => {
  try {
    const { username } = req.params;
    const data = await service.getRepos(username);
    res.send(data);
  } catch (err) {
    next(err);
  }
};
