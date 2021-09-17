"use strict"
module.exports = (sequelize, DataTypes) => {
    var Application = sequelize.define(
        "Application",
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },

            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {}
    )
    Application.associate = function (models) {
        Application.hasMany(models.Answer);
    }
    return Application
}
