let Landing = require("../schemas/landings")


const getAllLandings = async () => {
    try{
        const getLandings = await Landing.find({},"-_id");
        return getLandings
    }
    catch(err){
        console.error(err);
    }
}

const getMinimumMass = async (minimumMass) => {
    try{
        const getMinimumLandings = await Landing.find({mass:{$gt:minimumMass}});
        return getMinimumLandings
    }
    catch(err){
        console.error(err);
    }
}

const getMass = async(especificMass)=>{
    try{
        const getespecificMass= await Landing.find({mass:{$lt:especificMass}});
        return getespecificMass
    }
    catch(err){console.log(err);}
}

module.exports={
    getAllLandings,
    getMinimumMass,
    getMass

}