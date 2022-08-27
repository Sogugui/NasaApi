let Nea = require("../schemas/neas")

const getAllNeas = async () => {
    try{
        const getNeas = await Nea.find({},"-_id");
        return getNeas
    }
    catch(err){
        console.error(err);
    }
}

const getOrbit = async (orbit) => {
    try {
        const getOrbitClass = await Nea.find({orbit_class: orbit}, "orbit_class -_id designation period_yr")
        return getOrbitClass

    } catch (error) {
        console.error(error);
    }
}

module.exports ={
    getAllNeas,
    getOrbit
}
