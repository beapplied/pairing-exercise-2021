"use strict"
module.exports = (sequelize, DataTypes) => {
    var Answer = sequelize.define(
        "Answer",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            ApplicationId: DataTypes.INTEGER,
            QuestionId: DataTypes.INTEGER,
            text: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {}
    )
    Answer.associate = function (models) {
        Answer.belongsTo(models.Application);
        Answer.belongsTo(models.Question);
    }
    return Answer
}
