"use strict"
module.exports = (sequelize, DataTypes) => {
    var Review = sequelize.define(
        "Review",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            AnswerId: DataTypes.BIGINT,
            userName: DataTypes.STRING,
            score: DataTypes.INTEGER,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {}
    )
    Review.associate = function (models) {
        Review.belongsTo(models.Answer);
    }
    return Review
}
