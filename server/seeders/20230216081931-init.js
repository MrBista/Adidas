'use strict';

const { hashPassword } = require('../helpers/bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const users = [
      {
        username: 'bisma',
        password: hashPassword('bisma'),
        email: 'bisma@gmail.com',
        dateOfBirth: '2001-08-23',
        firstName: 'Gusti',
        lastName: 'Bisman',
        role: 'admin',
        phoneNumber: '082298380750',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const categories = [
      {
        name: 'Dewasa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kids',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Women',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sports',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Brands',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Outlet',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Best of Adidas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "hot's",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    const products = [
      {
        name: 'Air Jordan 6 Retro',
        slug: 'Air-Jordan-6-Retro',
        description:
          "MJ's sixth signature shoe debuted during the 1990-1991 season as His Airness battled rivals in pursuit of an elusive first championship. Now, it's back in a variety of color schemes. Gear up for the 30th anniversary of the Air Jordan 6 with this timeless classic.",
        price: 2000000,
        mainImg:
          'https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/h/r/hr0345_2_footwear_photography_side20lateral20view_grey.jpg',
        categoryId: 1,
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Air Jordan 1 Utility',
        slug: 'Air-Jordan-1-Utility',
        description:
          'Utilitarian, but make it edgy: these AJ1s give you functional use without compromising that style you know and love. Tough canvas, stash pockets and webbing pulls give these classic kicks a hit of rugged versatility.',
        price: 17000000,
        mainImg:
          'https://www.adidas.co.id/media/catalog/product/h/0/h03673_2_footwear_photography_side20lateral20view_grey.jpg',
        categoryId: 2,
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Air Jordan 7 Retro',
        slug: 'Air-Jor-dan-7-Retro',
        description:
          "Inspired by the shoe originally worn by MJ during the '92 season and summer of basketball, the Air Jordan 7 Retro revives its championship legacy for a new generation of sneakerheads.",
        price: 200000000,
        mainImg:
          'https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/h/q/hq9932_2_footwear_photography_side20lateral20view_grey.jpg',
        categoryId: 2,
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Air Jordan 8 Retro',
        slug: 'Air-Jordan-8-Retro',
        description:
          "Inspired by the shoe originally worn by MJ during the '92 season and summer of basketball, the Air Jordan 7 Retro revives its championship legacy for a new generation of sneakerheads.",
        price: 2000000000,
        mainImg:
          'https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/h/0/h03674_2_footwear_photography_side20lateral20view_grey.jpg',
        categoryId: 2,
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Users', users, {});
    await queryInterface.bulkInsert('Categories', categories, {});
    await queryInterface.bulkInsert('Products', products, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Products', null, {});
  },
};
