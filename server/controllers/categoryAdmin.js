const { Category, sequelize } = require('../models');
class CategoryAdmin {
  static async getAllCategory(req, res, next) {
    try {
      const categories = await Category.findAll({});

      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }
  static async addCategory(req, res, next) {
    const txt = await sequelize.transaction();
    try {
      const { name } = req.body;
      await Category.create({ name }, { transaction: txt });
      res.status(201).json({ message: 'successfully adding category' });
      await txt.commit();
    } catch (err) {
      await txt.rollback();

      next(err);
    }
  }
  static async deleteCategory(req, res, next) {
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
      next(err);
    }
  }
  static async editCategory(req, res, next) {
    const txt = await sequelize.transaction();
    try {
      const { id } = req.params;
      const { name } = req.body;
      const singleCategory = await Category.findByPk(id);
      if (!singleCategory) {
        throw { name: 'category empty' };
      }
      await Category.update(
        {
          name,
        },
        {
          transaction: txt,
          where: {
            id,
          },
        }
      );
      await txt.commit();
      res.status(200).json({ message: 'successfully update category' });
    } catch (err) {
      await txt.rollback();
      next(err);
    }
  }
  static async getCategoryById(req, res, next) {
    try {
      const { id } = req.params;
      const category = await Category.findOne({
        where: {
          id,
        },
      });
      if (!category) {
        throw { name: 'no category' };
      }
      res.status(200).json(category);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CategoryAdmin;
