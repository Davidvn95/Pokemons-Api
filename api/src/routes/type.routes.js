const { Router } = require("express");
const { getTypes } = require("../controllers/Gets.controller");
const routerType = Router();


routerType.get("/", async (req, res) => {
    try {
        const types = await getTypes();
        return res.status(200).json(types);
    } catch (error) {
        return res.status(500).json({ error: "Salió algo mal" });
    }
})



module.exports = routerType;