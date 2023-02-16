'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
      Product.belongsTo(models.User, { foreignKey: 'authorId' });
      Product.hasMany(models.Image, { foreignKey: 'productId' });
    }
  }
  Product.init(
    {
      name: { type: DataTypes.TEXT, allowNull: false },
      slug: { type: DataTypes.TEXT, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      mainImg: { type: DataTypes.TEXT, allowNull: false },
      categoryId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  Product.beforeValidate((instance, option) => {
    const generateSlug = instance.name.replace(/ /g, '-');
    instance.slug = generateSlug;
  });
  return Product;
};
