'use strict';

const mealsIds = [
  'c44ec954-bc57-41d1-85a5-d36e4705fb3a',
  '66c48a04-e644-4ecc-a8ee-ea7942344481',
  '89d7128f-91aa-4aa3-81a8-ce62aeea0de1',
  'e171a231-643b-4fb4-aad2-a830ca08c6ba',
];

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'meals',
      [
        {
          id: mealsIds[0],
          name: 'Боул "Морфиус"',
        },
        {
          id: mealsIds[1],
          name: 'Сладкий хлеб',
        },
        {
          id: mealsIds[2],
          name: 'Говядина с хлебом',
        },
        {
          id: mealsIds[3],
          name: 'Полезная вода для омоложения и бессмертия',
        },
      ],
      { ignoreDuplicates: true },
    );
  },

  async down(queryInterface, Sequelize) {},
};
