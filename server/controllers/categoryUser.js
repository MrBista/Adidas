const { Category, sequelize } = require('../models');
class CategoryUser {
  static async getAllCategory(req, res, next) {
    // console.log('masuk sini');
    try {
      // console.log('masuk');
      const categories = await Category.findAll();

      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CategoryUser;
