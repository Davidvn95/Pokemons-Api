const { Pokemon, Type } = require("../db");
const axios = require("axios");

const getTypes = async () => {
    const types = await Type.findAll();
    if (types.length) return types;
    else {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        Type.bulkCreate(response.data?.results);
        return response.data?.results;
    }
};

const axiosDetails = async (url) => {
    const response = await axios.get(url);
    const { data } = response;
    const types = data.types.map((ty) => ty.type?.name);
    const { other } = data.sprites;
    const pokemon = {
        id: data.id,
        name: data.name,
        weight: data.weight,
        height: data.height,
        life: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        type: types,
        image: other.home?.front_default,
    };
    return pokemon;
};

const getPokemons = async (name) => {
    if (name) {
        let pokemon;
        const result = await Pokemon.findAll({ where: { name }, include: Type });
        if (result.length) {
            const types = result[0].types?.map(type => type.name);
            const pkm = { ...result[0].dataValues, types: types }
            pokemon = pkm;
        }
        else {
            pokemon = await axiosDetails(`https://pokeapi.co/api/v2/pokemon/${name}`);
        }
        return pokemon;
    } else {
        const response = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=72"
        );
        const { results } = response.data;
        const promises = results.map((res) => axiosDetails(res.url));

        const pokemonsApi = await Promise.all(promises);
        const responseDB = await Pokemon.findAll({ include: Type });
        const pokemonsDb = responseDB.map(element => {
            const types = element.types?.map((type) => type.name);
            const pkm = { ...element.dataValues, types: types };
            return pkm;
        })
        return [...pokemonsApi, ...pokemonsDb];
    }
};

const getPokemonById = async (id) => {
    let pokemon;
    if (id.toString().length < 5) {
        pokemon = await axiosDetails(`https://pokeapi.co/api/v2/pokemon/${id}`);
    } else {
        const response = await Pokemon.findByPk(id, { include: Type });
        const { types } = response.dataValues;
        const myTypes = types.map((type) => type.name);
        const pkm = { ...response.dataValues, types: myTypes };
        pokemon = pkm
    }
    return pokemon;
};

module.exports = {
    getTypes,
    getPokemons,
    getPokemonById,
};
