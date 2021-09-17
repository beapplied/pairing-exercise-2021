"use strict"
module.exports = (sequelize, DataTypes) => {
    var Question = sequelize.define(
        "Question",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            text: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {}
    )
    Question.associate = function (models) {
        Question.hasMany(models.Answer);
    }
    return Question
}
