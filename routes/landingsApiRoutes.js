const express = require('express')


//Rutas de productos

const landingsApiController= require("../controllers/landingsApiController");
const landingsApiRouter= express.Router();

landingsApiRouter.get("/landings",landingsApiController.getLandings)


module.exports= landingsApiRouter