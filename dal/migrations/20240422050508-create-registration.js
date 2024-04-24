'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sectionId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Sections",
          key: "id"
        }
      },
      studentId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Students",
          key: "id"
        }
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Registrations');
  }
};