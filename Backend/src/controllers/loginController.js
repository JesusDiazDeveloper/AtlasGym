const jwt = require('jsonwebtoken');

const secretKey = 'secret';
const login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' });
  }
  if (username === 'atlasUser' && password === 'password') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ message: 'Authentication failed' });
  }
};

const verifyToken = (req, res, next) => {
  const header = req.header('Authorization') || '';
  const token = header.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token not provied' });
  }
  try {
    const payload = jwt.verify(token, secretKey);
    req.username = payload.username;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token not valid' });
  }
};

module.exports = {
  login,
  verifyToken,
};
