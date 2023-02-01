const { DataTypes, UUIDV4 } = require("sequelize");
// const imageDefault = require("../Pokemon desconocido.jpg")

module.exports = (sequelize) => {
    sequelize.define(
        "pokemon",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                primaryKey: true,
                allowNull: false,
                unique: true,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            life: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
            },
            attack: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
            },
            defense: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
            },
            speed: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
            },
            height: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
            },
            weight: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
            },
            image: {
                type: DataTypes.STRING,
            },
        },
        { timestamps: false }
    );
};
