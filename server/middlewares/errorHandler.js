const errorHandler = (err, req, res, next) => {
  if (
    err.name === 'SequelizeValidationError' ||
    err.name === 'SequelizeUniqueConstraintError'
  ) {
    res.status(400).json({ message: err.errors[0].message });
  } else if (err.name === 'JsonWebTokenError') {
    res.status(401).json({ message: 'Invalid token' });
  } else if (err.name === 'not found' || err.name === 'category empty') {
    res.status(404).json({ message: 'category not found' });
  } else if (err.name === 'not found product') {
    res.status(404).json({ message: 'product not found' });
  } else if (err.name === 'bad email') {
    res.status(400).json({ message: 'Email is required' });
  } else if (err.name === 'bad password') {
    res.status(400).json({ message: 'Password is required' });
  } else if (err.name === 'unAuth') {
    res.status(401).json({ message: 'Invalid email/password' });
  } else if (err.name === 'AggregateError') {
    res.status(400).json({ message: err.errors[0].errors.errors[0].message });
  } else {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { errorHandler };
