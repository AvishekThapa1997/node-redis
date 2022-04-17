const router = require('express').Router();
const { getRepos } = require('./controller');
const { userNameCheck } = require('./middleware.js');
router.get('/', (req, res, next) => {
  res.send({
    message: 'Learning Redis',
  });
});
router.get('/repos/:username?', userNameCheck, getRepos);
module.exports = router;
