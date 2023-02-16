const { comparePassword } = require('../helpers/bcryptjs');
const { signToken } = require('../helpers/jwt');
const { User } = require('../models');
class ControllerAdmin {
  static async register(req, res) {
    try {
      const { email, firstName, lastName, username, password } = req.body;
      await User.create({
        email,
        firstName,
        lastName,
        username,
        password,
        role: 'admin',
      });
      res.status(201).json({ message: 'successfully create new user' });
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({ message: err.errors[0].message });
      } else if (err.name === 'SequelizeValidationError') {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json(err);
      }
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: 'bad email' };
      }
      if (!password) {
        throw { name: 'bad password' };
      }
      const admin = await User.findOne({
        where: {
          email,
        },
      });
      if (!email) {
        throw { name: 'unAuth' };
      }
      const checkEmail = comparePassword(password, admin.password);
      if (!checkEmail) {
        throw { name: 'unAuth' };
      }
      const generateToken = signToken({
        id: admin.id,
        role: admin.role,
      });
      res.status(200).json({ access_token: generateToken });
    } catch (err) {
      if (err.name === 'bad email') {
        res.status(400).json({ message: 'Email is required' });
      } else if (err.name === 'bad password') {
        res.status(400).json({ message: 'Password is required' });
      } else if (err.name === 'unAuth') {
        res.status(401).json({ message: 'Invalid email/password' });
      } else {
        res.status(500).json(err);
      }
    }
  }
}

module.exports = ControllerAdmin;
