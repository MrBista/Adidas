const { comparePassword } = require('../helpers/bcryptjs');
const { signToken } = require('../helpers/jwt');
const { User } = require('../models');
class ControllerAdmin {
  static async register(req, res, next) {
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
      next(err);
    }
  }

  static async login(req, res, next) {
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
      next(err);
    }
  }
}

module.exports = ControllerAdmin;
