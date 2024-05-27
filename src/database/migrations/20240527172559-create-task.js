'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('task',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      description:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      date:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      priority_level:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_completed:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('task')
  }
};
