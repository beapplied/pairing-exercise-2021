"use strict"
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Answers", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            ApplicationId: {
                type: Sequelize.BIGINT,
                references: {
                    model: {
                        tableName: "Applications",
                    },
                    key: "id",
                },
            },
            QuestionId: {
                type: Sequelize.BIGINT,
                references: {
                    model: {
                        tableName: "Questions",
                    },
                    key: "id",
                },
            },
            text: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Answers")
    },
}
