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
      Product.hasMany(models.Image, {
        foreignKey: 'productId',
        onDelete: 'cascade',
        hooks: true,
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'name is required',
          },
          notNull: {
            msg: 'name is required',
          },
        },
      },
      slug: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'slug is required',
          },
          notNull: {
            msg: 'slug is required',
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'description is required',
          },
          notNull: {
            msg: 'description is required',
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'price is required',
          },
          notNull: {
            msg: 'price is required',
          },
          isPriceEnough(val) {
            if (val < 3000) {
              throw new Error('Minimum price is 3000');
            }
          },
        },
      },
      mainImg: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'main img is required',
          },
          notNull: {
            msg: 'main img is required',
          },
        },
      },
      categoryId: { type: DataTypes.INTEGER, onDelete: 'cascade' },
      authorId: { type: DataTypes.INTEGER, onDelete: 'cascade' },
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
