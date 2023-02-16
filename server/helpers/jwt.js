const jwt = require('jsonwebtoken');
const SECRET = 'shshshsh';
const signToken = (payload) => {
  return jwt.sign(payload, SECRET);
};

const decodeToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = {
  signToken,
  decodeToken,
};
