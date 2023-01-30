const { Router } = require("express");
// Importar todos los routers;
const routerType = require("./type.routes");
const routerPokemons = require("./pokemon.routes");

const router = Router();

// Configurar los routers
router.use("/types", routerType);
router.use("/pokemons", routerPokemons);

module.exports = router;
