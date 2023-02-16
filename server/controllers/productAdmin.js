const { Product, Image, Category, User } = require('../models');
const { sequelize } = require('../models');
class ControllerProductAdmin {
  static async getAllProduct(req, res) {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: User,
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt', 'role'],
            },
          },
          {
            model: Category,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
          {
            model: Image,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        ],
      });

      res.status(200).json(products);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async getProductById(req, res) {
    try {
      const { id } = req.params;
      const productId = await Product.findOne({
        where: {
          id,
        },
        include: [
          {
            model: User,
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt', 'role'],
            },
          },
          {
            model: Category,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
          {
            model: Image,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        ],
      });
      if (!productId) {
        throw { name: 'not found' };
      }
      res.status(200).json(productId);
    } catch (err) {
      console.log(err);
      if (err.name === 'not found') {
        res.status(404).json({ message: 'product not found' });
      } else {
        res.status(500).json(err);
      }
    }
  }

  static async addProduct(req, res) {
    const trx = await sequelize.transaction();
    try {
      const { name, description, price, mainImg, categoryId, images } =
        req.body;
      const productCrated = await Product.create(
        {
          name,
          description,
          price,
          mainImg,
          categoryId,
          authorId: req.admin.id,
        },
        {
          transaction: trx,
        }
      );

      const putImage = await images.map((el) => {
        el.productId = productCrated.id;
        return el;
      });
      await Image.bulkCreate(putImage, { transaction: trx });
      res.status(201).json({ message: 'successfully add product' });
      await trx.commit();
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      await trx.commit();
    }
  }

  static async editProduct(req, res) {
    const trx = await sequelize.transaction();
    try {
      const { name, description, price, mainImg, categoryId, images } =
        req.body;
      const { productId } = req.params;
      const singleProduct = await Product.findByPk(productId);

      if (!singleProduct) {
        throw { name: 'product empty' };
      }

      await Product.update(
        {
          name,
          description,
          price,
          mainImg,
          categoryId,
        },
        {
          transaction: trx,
          where: {
            id: productId,
          },
          hooks: true,
        }
      );
      await Image.destroy({
        where: {
          productId,
        },
        transaction: trx,
      });
      const putImage = images.map((el) => {
        el.productId = productId;
        return el;
      });
      await Image.bulkCreate(putImage, { transaction: trx });
      await trx.commit();
      res.status(200).json({ message: 'successfully update product' });
    } catch (err) {
      await trx.commit();
      if (err.name === 'product empty') {
        res.status(404).json({ message: 'product not found' });
      } else {
        res.status(500).json(err);
      }
    }
  }

  static async deleteProduct(req, res) {
    const trx = await sequelize.transaction();
    try {
      const { productId } = req.params;
      const singleProduct = await Product.findByPk(productId);
      if (!singleProduct) {
        throw { name: 'not found' };
      }
      await Product.destroy({
        where: {
          id: productId,
        },
        transaction: trx,
      });
      res.status(200).json({ message: 'successfully delete data' });
      await trx.commit();
    } catch (err) {
      await trx.commit();
      console.log(err);
      if (err.name === 'not found') {
        res.status(404).json({ message: 'product not found' });
      } else {
        res.status(500).json(err);
      }
    }
  }
}

module.exports = ControllerProductAdmin;
