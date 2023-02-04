const { Pokemon, Type } = require("../db");

const createPokemon = async (
    name,
    life,
    attack,
    defense,
    speed,
    height,
    weight,
    type,
    image
) => {
    if (!name) throw Error("name is required");
    else {
        const newPokemon = await Pokemon.create({
            name,
            life,
            attack,
            defense,
            speed,
            height,
            weight,
            image,
        });
        const myType = await Type.findAll({ where: { name: type } });
        await newPokemon.addType(myType);
        const typesReturn = myType.map((element) => element.dataValues?.name);

        return {
            ...newPokemon.dataValues,
            type: typesReturn,
        };
    }
};
module.exports = {
    createPokemon,
};
