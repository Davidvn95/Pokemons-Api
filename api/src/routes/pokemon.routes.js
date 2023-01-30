const { Router } = require("express");
const { getPokemons, getPokemonById } = require("../controllers/Gets.controller");
const {createPokemon}=require("../controllers/Posts.controller")
const routerPokemons = Router();

routerPokemons.get("/", async (req, res) => {
    const { name } = req.query;
try {
    const pokemons = await getPokemons(name);
    return res.status(200).json(pokemons);
} catch (error) {
    return res.status(404).json({error:"pokemon not found"})
}
    
})

routerPokemons.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const pokemon = await getPokemonById(id);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json({ error: "pokemon not found" });
    }
})

routerPokemons.post("/", async (req, res) => {
    const { name, life, attack, defense, speed, height, weight, type, image } = req.body;
    try {
        const newPokemon = await createPokemon(
            name,
            life,
            attack,
            defense,
            speed,
            height,
            weight,
            type,
            image,
        );

        return res.status(200).json([{message:"creation succesful"}, newPokemon])
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
})


module.exports = routerPokemons;