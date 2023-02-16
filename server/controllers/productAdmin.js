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
    } catch (err) {
      res.status(500).json(err);
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
}

module.exports = ControllerProductAdmin;
