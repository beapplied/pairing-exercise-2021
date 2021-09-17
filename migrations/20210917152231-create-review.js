"use strict"
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Reviews", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            AnswerId: {
                type: Sequelize.BIGINT,
                references: {
                    model: {
                        tableName: "Answers",
                    },
                    key: "id",
                },
            },
            userName: {
                type: Sequelize.STRING,
            },
            score: {
                type: Sequelize.INTEGER,
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
        return queryInterface.dropTable("Reviews")
    },
}
