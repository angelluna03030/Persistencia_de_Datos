'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("Sections", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teacherId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Teachers",
          key: "id"
        }
      },
      subjectId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Subjects",
          key: "id"
        }
      },
      courseId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Courses",
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
    await queryInterface.dropTable('Sections');
  }
};