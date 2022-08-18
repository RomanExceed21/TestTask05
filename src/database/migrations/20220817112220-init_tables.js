'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const id = {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    };

    const timestamp = {
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    };

    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable(
        'meals',
        {
          id,
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        },
        {
          transaction: t,
        },
      );

      await queryInterface.createTable(
        'components',
        {
          id,
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        },
        {
          transaction: t,
        },
      );
      await queryInterface.createTable(
        'meals_components',
        {
          meal_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            references: {
              model: 'meals',
              key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          component_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            references: {
              model: 'components',
              key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        },
        {
          transaction: t,
        },
      );

      await queryInterface.createTable(
        'rewievs',
        {
          id,
          author: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          text: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          component_id: {
            type: Sequelize.UUID,
            references: {
              model: 'components',
              key: 'id',
            },
            allowNull: true,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          meal_id: {
            type: Sequelize.UUID,
            references: {
              model: 'meals',
              key: 'id',
            },

            allowNull: true,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          ...timestamp,
        },
        {
          transaction: t,
        },
      );
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable(
        'rewievs',
        { cascade: true },
        {
          transaction: t,
        },
      );

      await queryInterface.dropTable(
        'components',
        { cascade: true },
        {
          transaction: t,
        },
      );

      await queryInterface.dropTable(
        'meals',
        { cascade: true },
        {
          transaction: t,
        },
      );
    });
  },
};
