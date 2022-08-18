'use strict';
const componentsIds = [
  'b6cb20f7-31ba-4d08-8159-e27ae7188cb4',
  '118f7da7-93f0-4432-9b75-49970e45e866',
  'c0e7a26b-4b21-4bdb-b5c6-db594a38e3d4',
  '22900b4b-4a9c-4a6b-8ae2-b9c512a5ca47',
  'b6ddd5ba-7e1a-4fff-8436-9e1ab30f0ccc',
  'cdd90a0c-317e-4109-9d2e-af612d4bf7a1',
];

const mealsIds = [
  'c44ec954-bc57-41d1-85a5-d36e4705fb3a',
  '66c48a04-e644-4ecc-a8ee-ea7942344481',
  '89d7128f-91aa-4aa3-81a8-ce62aeea0de1',
  'e171a231-643b-4fb4-aad2-a830ca08c6ba',
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'components',
      [
        {
          id: componentsIds[0],
          name: 'Синяя таблетка',
        },
        {
          id: componentsIds[1],
          name: 'Красная таблетка',
        },
        {
          id: componentsIds[2],
          name: 'Хлеб',
        },
        {
          id: componentsIds[3],
          name: 'Изюм',
        },
        {
          id: componentsIds[4],
          name: 'Говядина',
        },
        {
          id: componentsIds[5],
          name: 'Вода из-под крана',
        },
      ],
      { ignoreDuplicates: true },
    );

    await queryInterface.bulkInsert(
      'meals_components',
      [
        {
          component_id: componentsIds[0],
          meal_id: mealsIds[0],
        },
        {
          component_id: componentsIds[1],
          meal_id: mealsIds[0],
        },
        {
          component_id: componentsIds[2],
          meal_id: mealsIds[1],
        },
        {
          component_id: componentsIds[3],
          meal_id: mealsIds[1],
        },
        {
          component_id: componentsIds[4],
          meal_id: mealsIds[2],
        },
        {
          component_id: componentsIds[2],
          meal_id: mealsIds[2],
        },
        {
          component_id: componentsIds[5],
          meal_id: mealsIds[3],
        },
      ],
      { ignoreDuplicates: true },
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'components',
      {
        where: {
          id: {
            [Sequelize.Op.in]: componentsIds,
          },
        },
      },
      {},
    );
  },
};
