const { Category, sequelize } = require('../models');
class CategoryAdmin {
  static async getAllCategory(req, res) {
    // console.log('masuk sini');
    try {
      console.log('masuk');
      const categories = await Category.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });
      // console.log(categories, 'ini salah?');
      res.status(200).json(categories);
    } catch (err) {
      // console.log(err, 'ini error');
      res.status(500).json(err);
    }
  }
  static async addCategory(req, res) {
    const txt = await sequelize.transaction();
    try {
      const { name } = req.body;
      await Category.create({ name }, { transaction: txt });
      res.status(201).json({ message: 'successfully adding category' });
      txt.commit();
    } catch (err) {
      txt.commit();
      if (err.name === 'SequelizeValidationError') {
        res.status(200).json({ message: err.errors[0].message });
      } else {
        res.status(500).json(err);
      }
    }
  }
  static async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      if (!category) {
        throw { name: 'not found' };
      }
      await Category.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({ message: 'successfully delete category' });
    } catch (err) {
      if (err.name === 'not found') {
        res.status(404).json({ message: 'category not found' });
      } else {
        res.status(500).json(err);
      }
    }
  }
}

module.exports = CategoryAdmin;
