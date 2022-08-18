'use strict';

const rewsIds = [
  '305423bc-15bd-4d5f-ae9d-5ba1c9dcb783',
  '7b8dabae-b5d5-4de6-8117-92313be906ca',
  '01299c69-7b33-4ed6-9ff3-2311644e3b48',
  '8b84e74f-5f7b-4744-8567-d343b07e583a',
];

const mealsIds = [
  'c44ec954-bc57-41d1-85a5-d36e4705fb3a',
  '66c48a04-e644-4ecc-a8ee-ea7942344481',
  '89d7128f-91aa-4aa3-81a8-ce62aeea0de1',
];

const componentsIds = [
  'b6cb20f7-31ba-4d08-8159-e27ae7188cb4',
  '118f7da7-93f0-4432-9b75-49970e45e866',
  'c0e7a26b-4b21-4bdb-b5c6-db594a38e3d4',
  '22900b4b-4a9c-4a6b-8ae2-b9c512a5ca47',
  'b6ddd5ba-7e1a-4fff-8436-9e1ab30f0ccc',
];

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'rewievs',
      [
        {
          id: rewsIds[0],
          author: 'Mr Anderson',
          text: `Синии таблетки великолепны! После них чувствовал себя молодым и свежим! 
        Рекомендую брать только их!
        Красная таблетка на вкус была неплоха. 
        Первое, что вы чувствуете - терпкий аромат полыни с легкой горчинкой.
        Через пару секунд вы почувствуете легкий, немного сладкий вкус вишни.
        Тепло растекается по вашему телу, вы закрываете глаза...
        К минусам могу отнести побочные эффекты: я думаю, нужно было проконсультироваться с врачем, 
        но галюцинации не отпускают уже четвертый фильм...`,
          meal_id: mealsIds[0],
        },
        {
          id: rewsIds[1],
          author: 'Братишка',
          text: `Сладкий хлеб был неплох. Очень даже неплох! 
        Вы, безусловно, знаете, что в деревнях-то все хлеб ели, но он не смог мне надоесть.
        Каждый раз, когда ощущаю этот восхитительный вкус,
        вспоминаю лучшее время в своей жизни - срочную службу в армии.`,
          meal_id: mealsIds[1],
        },
        {
          id: rewsIds[2],
          author: 'Махатма Ганди',
          text: `На вкус совсем несхожа с говядиной!`,
          component_id: componentsIds[4],
        },
        {
          id: rewsIds[3],
          author: 'Йовери Кагута Мусевени',
          text: `Вода очень вкусная! Предлагаю добавлять ее поболше во все блюда!`,
        },
      ],
      { ignoreDuplicates: true },
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'rewievs',
      {
        where: {
          id: {
            [Sequelize.Op.in]: rewsIds,
          },
        },
      },
      {},
    );
  },
};
