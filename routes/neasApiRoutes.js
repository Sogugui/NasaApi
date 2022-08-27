const express = require('express')


//Rutas de productos

const neasApiController= require("../controllers/neasApiController");
const neasApiRouter= express.Router();

neasApiRouter.get("/neas",neasApiController.getNeas)
// neasApiRouter.post("/create",neasApiController.postneas)
// neasApiRouter.put("/edit",neasApiController.putneas)
// neasApiRouter.delete("/delete",neasApiController.dropneas)



module.exports= neasApiRouter