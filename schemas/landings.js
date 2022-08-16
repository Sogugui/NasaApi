const mongoose = require('mongoose');


const landingsSchema = {
    name: { 
        type: String, 
        required: true,
        unique: true
    },
    id: { 
        type: String, 
        required: true,
        unique: true 
    },
    nametype: { 
        type: String, 
        required: true 
    },
    recclass: { 
        type: String, 
        required: true 
    },
    mass:{
        type: String,
        required: true       
    },
    
    fall:{
        type: String,
        required: true       
    },
    year:{
        type: String,
        required: true 
    },
    reclat:{
        type: String
    },
    reclong:{
        type: String
    },
    geolocation:{
        type: Object,
        latitude:{
            type:String,
            required: true
        },
        longitude:{
            type:String,
            required: true
        }
    }


};
// Crear el esquema
const createlandingsSchema = mongoose.Schema(landingsSchema);
// Crear el modelo --> Colección
const Landing = mongoose.model('landings', createlandingsSchema);

module.exports = Landing;